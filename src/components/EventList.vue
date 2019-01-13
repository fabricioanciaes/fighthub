<script>
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: { EventCard },
  data() {
    return {
      events: [],
      loading: false,
      error: false,
      apiUrl: "http://fighthub-api.herokuapp.com/events?_limit=30"
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
        .catch(() => {
          this.loading = false;
          this.error = true;
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
      <div v-if="loading"><VLoader /></div>
      <div v-if="error">
        Erro! Não conseguimos nos comunicar com o servidor, por favor tente de
        novo mais tarde.
      </div>
    </div>
    <div class="container wrapper" v-if="!error">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.wrapper {
  margin-top: $spacer;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: $spacer/2;
}
</style>
