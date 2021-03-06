<script>
import EventFilter from "@/components/EventFilter.vue";
import EventCard from "@/components/EventCard.vue";
import VLoader from "@/components/VLoader.vue";
import VError from "@/components/VError.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "EventList",
  components: { EventCard, VLoader, VError, VButton, EventFilter },
  data() {
    return {
      events: [],
      loading: false,
      error: false,
      errorMsg: "",
      apiUrl: `https://fighthub-api.herokuapp.com/graphql?query={events(limit: 50, sort: "dateStart:asc", where: {dateEnd_gt: "${new Date(
        Date.now()
      ).toISOString()}"}) {name,address,state,dateStart,dateEnd,games,links,stream,_id,tipoEvento}}`,
      filters: {
        state: "Todos",
        type: "Todos"
      }
    };
  },
  methods: {
    handleErrors: function(response) {
      if (!response.ok) {
        throw Error(
          "Erro ao pegar informações do servidor: " + response.statusText
        );
      }
      return response;
    },

    fetchEvents: function() {
      this.loading = true;
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(result => {
          this.loading = false;
          this.events = result.data.events;
        })
        .catch(result => {
          this.loading = false;
          this.error = true;
          this.errorMsg = result.toString();
        });
    },

    update: function(event) {
      this.filters = Object.assign(event);
    }
  },
  created() {
    return this.fetchEvents();
  },
  computed: {
    filteredEvents() {
      if (this.filters.state === "Todos" && this.filters.type === "Todos") {
        return this.events;
      } else {
        return this.events.filter(event => {
          return (
            (this.filters.state === "Todos" ||
              event.state === this.filters.state) &&
            (this.filters.type === "Todos" ||
              event.tipoEvento === this.filters.type)
          );
        });
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="container error-wrapper">
      <div v-if="loading"><VLoader disclaimer="true" /></div>
      <VError v-if="error" v-bind:error="this.errorMsg" />
    </div>
    <div class="container" v-if="!error && !loading">
      <event-filter
        class="event-filter"
        :filters="this.filters"
        @filterchange="update"
      />
      <transition
        name="errorContainer"
        enter-active-class="cardIn"
        leave-active-class="cardOut"
      >
        <div
          class="no-events"
          v-if="filteredEvents.length <= 0 && this.loading === false"
        >
          <h1>Não há eventos acontecendo</h1>
          <p>Quer seu evento aqui?</p>
          <router-link to="/contribua">
            <VButton class="accent lg">Veja Como Contribuir</VButton>
          </router-link>
        </div>
      </transition>
      <transition-group
        name="cardlist"
        enter-active-class="cardIn"
        leave-active-class="cardOut"
        move-class="cardMove"
        class="container no-spacing wrapper card-container"
      >
        <EventCard
          v-for="event in filteredEvents"
          :key="event._id"
          :event="event"
          class="event-card"
        />
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.wrapper {
  margin-top: $spacer;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: $spacer;
}

.container {
  max-width: 1366px;
  margin-bottom: $spacer * 2;
}

.no-events {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: $bg1;
  padding: $spacer;
  grid-column: 1/-1;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  @include shadow(21);
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    font-weight: 100 !important;
  }

  p {
    margin-bottom: $spacer;
  }
}

.event-filter {
  width: 100%;
  max-width: 420px;
  justify-self: end;
}

.card-container {
  position: relative;
  transition: all 0.3s $timing;

  span {
    transition: all 0.3s $timing;
  }
}

.event-card {
  transition: all 0.3s $timing;
}

.cardIn,
.cardOut {
  animation-duration: 0.3s;
  animation-timing-function: $timing;
  transition: all 0.3s $timing;
  backface-visibility: hidden;
}

.cardIn {
  animation-name: cardIn;
}
.cardOut {
  animation-name: cardOut;
  position: absolute;
}

.cardMove {
  transition: all 0.3s $timing;
}

@keyframes cardIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes cardOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
