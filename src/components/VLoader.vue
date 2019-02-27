<script>
export default {
  name: "VLoader",
  props: ["disclaimer"],
  data() {
    return {
      showDisclaimer: false
    };
  },
  mounted() {
    if (this.disclaimer) {
      setTimeout(() => {
        this.showDisclaimer = true;
      }, 3000);
    }
  }
};
</script>

<template>
  <div class="div">
    <div class="loader">Loading...</div>
    <div v-if="this.showDisclaimer" class="disclaimer">
      <h2>Demorando muito?</h2>
      <p>
        Os servidores do fighthub dormem quando não estão sendo utilizados.<br />Apenas
        espere um pouco para que os servidores acordem
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite $timing;
  animation: load7 1.8s infinite $timing;
}
.loader {
  color: $loaderbg;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

.disclaimer {
  opacity: 0;
  animation: disclaimer 0.6s $timing;
  animation-fill-mode: forwards;
  text-align: center;
}

@keyframes disclaimer {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
