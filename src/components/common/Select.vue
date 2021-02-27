<template>
  <div class="select" :class="{'select--opened': isOpened}">
    <select
      :value="selected"
      placeholder="Select a unit"
      class="select__control"
      @change="$emit('change', $event.target.value)"
      @click="isOpened = !isOpened"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
        :selected="option.value === selected"
        :disabled="option.disabled"
      >
        {{ option.displayValue }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
  components: {},
  data: () => ({
    isOpened: false,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.select {
  width: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 22px;
    width: 10px;
    height: 2px;
    border-radius: 2px;
    background-color: $brown;
    transition: transform 0.3s;
  }

  &::before {
    transform: rotate(45deg);
    right: 30px;
    z-index: 5;
  }

  &::after {
    transform: rotate(-45deg);
    right: 24px;
  }

  &--opened {
    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(-135deg);
    }
  }

  &__control { 
    min-height: 44px;
    min-width: 100px;
    width: 100%;
    padding: 0 16px;
    border: 1px solid $brown;
    color: $black;
    font-family: inherit;
    font-size: 0.9rem;
    appearance: none;
    position: relative;

    &:focus {
      outline: none;
    }
  }
}
</style>