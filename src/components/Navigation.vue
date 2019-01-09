<script>
export default {
  name: 'Navigation',
  data: function() {
    return {
      items: [
        {id: 1, label: 'Eventos', url: '#eventos'},
        {id: 2, label: 'Sobre', url: '#sobre'},
        {id: 3, label: 'Contribua', url: '#contribua'},
      ]
    }
  }
}
</script>

<template>
  <nav>
    <div class="brand">
      Logo
    </div>
    <ul>
      <li v-for="item in items" :key="item.id" :item="item">
        <a :href="item.url"> {{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

nav, nav a {
  color: color-contrast($bg1, $dark, $light)
}

nav {
  background-color: $bg1;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display:flex;
  list-style:none;
  padding:0 $spacer/2;
  flex-wrap:nowrap;
}

ul li {
  margin:0 $spacer/2;
}

a {
  text-decoration:none;
}

.brand {
  padding:$spacer/2;
}

</style>
