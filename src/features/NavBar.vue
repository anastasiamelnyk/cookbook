<template>
  <nav class="nav-bar">
    <router-link to="/" class="nav-bar__logo">
      Cookbook
    </router-link>
    <span class="nav-bar__username">
      username
    </span>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.nav-bar {
  background-color: $brown;
  color: $pink-gray;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-size: 1.5rem;
    font-weight: $light;
  }

  &__username {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}
</style>