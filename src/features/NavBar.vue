<template>
  <Wrapper tag="nav" class="nav-bar">
    <router-link to="/" class="nav-bar__logo">
      Cookbook
    </router-link>
    <span class="nav-bar__username">
      username
    </span>
  </Wrapper>
</template>

<script>
import Wrapper from '~components/common/Wrapper';
export default {
  name: 'NavBar',
  props: {},
  components: {
    Wrapper,
  },
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
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    font-size: 1.5rem;
    font-weight: $light;
    position: relative;
    transition: opacity 0.3;

    &::after {
      content: '';
      position: absolute;
      left: 2px;
      bottom: 4px;
      height: 1px;
      width: 0%;
      background-color: $pink-gray;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 80%;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__username {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}
</style>