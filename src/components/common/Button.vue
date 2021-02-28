<template>
  <button
    :type="type"
    class="button"
    :class="{
      'button--add-icon': isAddIcon,
      'button--bigger': isBigger
    }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    isAddIcon: {
      type: Boolean,
      default: false,
    },
    isBigger: {
      type: Boolean,
      default: false,
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

.button {
  border: none;
  background: none;
  padding: 0;
  background-color: $accent-blue;
  font: inherit;
  font-size: 0.9rem;
  font-weight: $bold;
  color: #fff;
  padding: 0 24px;
  height: 32px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: darken($accent-blue, 20%);
  }

  &:active {
    opacity: 0.7;
  }

  &--add-icon {
    width: 32px;
    height: 32px;
    padding: 0;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 15px;
      top: 9px;
      width: 2px;
      height: 14px;
      background-color: #fff;
    }

    &::after {
      transform: rotate(90deg);
    }
  }

  &--bigger {
    padding: 0 32px;
    height: 44px;
    font-size: 1rem;
  }
}
</style>