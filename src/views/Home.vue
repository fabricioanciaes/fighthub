<template>
  <div class="home page"><EventList /></div>
</template>

<script>
// @ is an alias to /src
import EventList from "@/components/EventList.vue";

export default {
  name: "home",
  components: {
    EventList
  }
};
</script>
