<template>
  <button
    :type="type"
    class="button"
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
  padding: 0 32px;
  height: 32px;
  cursor: pointer;
}
</style>