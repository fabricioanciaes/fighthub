<script>
export default {
  name: "v-button",
  props: {
    onClick: {
      type: Function,
      required: false
    }
  }
};
</script>

<template>
  <button><slot>Button</slot></button>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

button {
  text-decoration: none;
  border: 1px solid;
  display: inline-block;
  padding: 0.25rem 0.8rem;
  border-radius: 0.25rem;
  @include shadow(1);
  transition: all 0.3s;
  transition-timing-function: $timing;
}

button:hover {
  @include shadow(3);
}

.accent {
  @include button-bg($accent);
}

.light {
  @include button-bg($light);
}

.outline {
  background: none;
}

.outline.accent {
  @include button-outline($accent);
}

.outline.light {
  @include button-outline($light);
}

.twitch {
  @include button-bg($twitch);
}
.outline.twitch {
  @include button-outline($twitch);
}

.lg {
  padding: 0.5rem 1rem;
}
</style>
