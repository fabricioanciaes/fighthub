<script>
export default {
  name: "EventFilter",
  data() {
    return {
      eventTypes: ["Todos", "Online", "Offline", "Major"],
      states: ["Todos","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],
      filter: {
        state: "Todos",
        type: "Todos"
      }
    }
  },
  methods: {
    onChange: function() {
      this.$emit('filterchange', this.filter)
    }
  }
}
</script>

<template>
  <div class="filters">
    <div class="filter">
      <h5>Estado:</h5>
      <select :default="states[1]" v-model="filter.state" @click="onChange"
      :disabled="filter.type === 'Online'"
      :value="filter.type === 'Online' ? filter.state = 'Todos' : filter.state"
      >
        <option v-for="state in states" :value="state">{{state}}</option>
      </select>
    </div>
    <div class="filter">
      <h5>Tipo de Evento:</h5>
      <select v-model="filter.type" @click="onChange">
        <option v-for="type in eventTypes" :value="type">{{type}}</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.filters {
  border-radius: 0.25rem;
  @include shadow(21);
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin-bottom: $spacer*2;
  grid-column: 1/-1;
  max-width:520px;
}

.filters .filter {
  display:flex;
  flex-direction: column;

  h5 {
    margin-bottom:$spacer/4;
  }

  select {
    padding:0.5rem;
    border-radius:0.25rem;
    border:none;
    background-color: $light;
    color: color-contrast($light, $dark, $light);
    transition: all 0.3s $timing;

    &:disabled {
      opacity:0.2;
      filter: grayscale(1);
    }
  }
}
</style>


