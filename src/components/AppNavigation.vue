<script>
export default {
  name: "AppNavigation",
  data: () => {
    return {
      items: [
        { id: 1, label: "Eventos", route: "/" },
        { id: 2, label: "Sobre", route: "/sobre" },
        { id: 3, label: "Contribua", route: "/contribua" }
      ]
    };
  }
};
</script>

<template>
  <nav>
    <router-link :to="'/'"> <div class="brand">Logo</div> </router-link>
    <ul>
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.route">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

nav,
nav a {
  color: color-contrast($bg1, $dark, $light);
}

nav {
  background-color: $bg1;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999999;

  @include shadow(6);
}

ul {
  display: flex;
  list-style: none;
  padding: 0 $spacer/2;
  flex-wrap: nowrap;
}

ul li {
  margin: 0 $spacer/2;
}

a {
  text-decoration: none;
}

.brand {
  padding: $spacer/2;
}
</style>
