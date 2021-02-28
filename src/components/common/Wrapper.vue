<template>
  <component :is="tag" class="wrapper">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.wrapper {
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: $media-sm) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (min-width: $media-md) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (min-width: $media-lg) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media (min-width: $media-xl) {
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>