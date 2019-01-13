<template>
  <div class="event-page">Event Page</div>
</template>

<script>
console.log(this.$route.query.test); // outputs 'yay'

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped></style>
