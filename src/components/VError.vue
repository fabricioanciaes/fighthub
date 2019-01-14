<script>
export default {
  name: "VError",
  props: ["error"]
};
</script>

<template>
  <div class="error">
    <h2>Erro!</h2>
    <p>
      Não conseguimos nos comunicar com o servidor. Por favor tente mais tarde
    </p>
    <p>Código do Erro: {{ this.error }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.error {
  margin-top: $spacer;
  background-color: $danger;
  padding: $spacer;
  border-radius: 0.25rem;
  @include shadow(21);
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
