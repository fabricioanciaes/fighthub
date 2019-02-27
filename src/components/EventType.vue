<script>
export default {
  name: "EventType",
  props: ["eventType"]
};
</script>

<template>
  <div :class="['event-type', this.eventType]">
    <font-awesome-icon
      v-if="eventType === 'Offline'"
      :icon="['fas', 'map-marked-alt']"
    />
    <font-awesome-icon v-if="eventType === 'Online'" :icon="['fas', 'wifi']" />
    <font-awesome-icon v-if="eventType === 'Major'" :icon="['fas', 'crown']" />
    {{ this.eventType }}
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.event-type {
  padding: $spacer/8 $spacer/2;
  display: inline-block;
  border-radius: 0.25rem;
}

.Major {
  background-color: $major;
  color: color-contrast($major, $dark, $light);
}
.Offline {
  background-color: $offline;
  color: color-contrast($offline, $dark, $light);
}
.Online {
  background-color: $online;
  color: color-contrast($online, $dark, $light);
}
</style>
