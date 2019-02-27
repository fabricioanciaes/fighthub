<template>
  <div id="app">
    <AppNavigation />
    <transition
      appear
      name="page-slide"
      enter-active-class="pageIn"
      leave-active-class="pageOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
export default {
  name: "App",
  components: { AppNavigation }
};
</script>

<style lang="scss">
@import "assets/styles/_variables.scss";

.pageIn,
.pageOut {
  animation-duration: 0.6s;
  animation-timing-function: $timing;
}

.pageIn {
  animation-name: pageIn;
}

.pageOut {
  animation-name: pageOut;
}

@keyframes pageIn {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pageOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(0rem);
  }
}

.page {
  position: absolute;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  top: 3.195625rem;
}
</style>
