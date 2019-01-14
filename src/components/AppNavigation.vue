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
    <router-link class="brand" :to="'/'">
      <img
        src="../assets/logo-mobile.svg"
        alt="Fighthub"
        srcset="../assets/logo-mobile.svg 400w, ../assets/logo.svg"
      />
    </router-link>
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
  line-height: 0;
  transition: background-color 0.3s $timing;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
}

nav {
  background-color: $bg1;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;

  min-height: 3.195625rem;

  @include shadow(6);
}

ul {
  display: flex;
  list-style: none;

  flex-wrap: nowrap;
}

ul li {
}

a {
  text-decoration: none;
  transition: color 0.3s $timing;
  padding: $spacer/4 $spacer/4;
  margin: 0 $spacer/4;
  &:hover {
    color: $accent;
  }
}

.brand {
  width: 100%;
  max-height: 32px;
  max-width: 32px;

  padding: 0;
  margin: 0;

  @media (min-width: 400px) {
    max-height: 48px;
    max-width: 120px;
  }
}

.brand.is-active {
  background: none !important;
}

.is-active {
  background-color: $accent;
  color: color-contrast($accent, $dark, $light);
  border-radius: 0.25rem;

  &:hover {
    background-color: color-contrast(
      $accent,
      lighten($accent, 5%),
      darken($accent, 5%)
    );
    color: color-contrast($accent, $dark, $light);
  }
}
</style>
