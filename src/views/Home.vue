<template>
  <div class="home">
    <div v-if="loading">Carregando...</div>
    <div v-if="error">
      Erro! Não conseguimos nos comunicar com o servidor, por favor tente de
      novo mais tarde.
    </div>

    <div class="wrapper">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import EventCard from "@/components/EventCard.vue";

export default {
  name: "home",
  components: { EventCard },
  data() {
    return {
      events: [],
      loading: false,
      error: false,
      apiUrl: "http://fighthub-api.herokuapp.com/events"
    };
  },
  methods: {
    fetchEvents: function() {
      this.loading = true;
      fetch(this.apiUrl)
        .then(response => response.json()) // retorna uma promise
        .then(result => {
          console.log(result);
          this.loading = false;
          this.events = result;
        })
        .catch(err => {
          // trata se alguma das promises falhar
          console.error("Failed retrieving information", err);
          this.loading = false;
          this.error = true;
        });
    }
  },
  mounted() {
    return this.fetchEvents();
  }
};
</script>
