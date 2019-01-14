<script>
import EventCard from "@/components/EventCard.vue";
import VLoader from "@/components/VLoader.vue";
import VError from "@/components/VError.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "EventList",
  components: { EventCard, VLoader, VError, VButton },
  data() {
    return {
      events: [],
      loading: false,
      error: false,
      errorMsg: "",
      apiUrl:
        "http://fighthub-api.herokuapp.com/events?_limit=30&_sort=dateStart:ASC"
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
        .then(this.handleErrors)
        .then(response => response.json())
        .then(result => {
          this.loading = false;
          this.events = result;
        })
        .catch(result => {
          this.loading = false;
          this.error = true;
          this.errorMsg = result.toString();
        });
    }
  },
  created() {
    return this.fetchEvents();
  }
};
</script>

<template>
  <div>
    <div class="container error-wrapper">
      <div v-if="loading"><VLoader disclaimer="true" /></div>
      <VError v-if="error" v-bind:error="this.errorMsg" />
    </div>
    <div class="container wrapper" v-if="!error">
      <div
        class="no-events"
        v-if="this.events.length <= 0 && this.loading === false"
      >
        <h1>Não há eventos acontecendo</h1>
        <p>Quer seu evento aqui?</p>
        <router-link to="/contribua">
          <VButton class="accent lg">Veja Como Contribuir</VButton>
        </router-link>
      </div>
      <EventCard v-for="event in events" :key="event.id" :event="event" />
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

  h1 {
    font-weight: 100 !important;
  }

  p {
    margin-bottom: $spacer;
  }
}
</style>
