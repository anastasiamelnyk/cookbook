<template>
  <component
    :is="type"
    :style="{ 'text-align': textAlign }"
    :class="`heading--${type}`"
    class="heading">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      default: 'h2',
    },
    textAlign: {
      type: String,
      default: 'left',
    },
  },
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.heading {
  font-weight: $extra-bold;
  font-size: 2rem;
  line-height: 1.2;
  color: $black;

  &--h3 {
    font-size: 1.5rem;
  }

  &--h4 {
    font-size: 1rem;
  }

  @media (min-width: $media-sm) {
    font-size: 2.5rem;

    &--h3 {
      font-size: 2rem;
    }

    &--h4 {
      font-size: 1.5rem;
    }
  }
}
</style>