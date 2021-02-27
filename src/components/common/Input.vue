<template>
  <div
    :class="[
      'pb-4',
      'input',
      {
        'input--error': error,
        'input--non-empty': !isInputEmpty,
        'input--bigger': isBigger,
      },
    ]"
  >
    <div class="input__wrapper">
      <component
        :is="isMultiline ? 'textarea' : 'input'"
        :value.prop="value"
        :type="type"
        :id="name"
        :rows="isMultiline ? rows : ''"
        :placeholder="label ? label : placeholder"
        class="input__control"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event)"
      />
      <label :for="name" class="input__label">
        {{ label }}
      </label>
    </div>
    <transition name="slide-error">
      <div v-if="error" class="input__error">
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    isMultiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    error: {
      type: String,
      default: '',
    },
    isBigger: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isInputEmpty() {
      return !this.value.length;
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.input {
  $self: &;

  width: 100%;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  &__control {
    min-height: 44px;
    min-width: 100px;
    width: 100%;
    padding: 8px 16px;
    border: 1px solid $brown;
    color: $black;
    font-family: inherit;
    font-size: 0.9rem;
    resize: none;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
        transition: color 0.2s;
      }
    }

    &::placeholder {
      color: rgba($black, 0.9);
    }
  }

  &__error {
    padding-top: 2px;
    font-size: 0.8rem;
    color: $error-red;
    text-align: left;
  }

  &__label {
    position: absolute;
    left: 12px;
    font-size: 0.9rem;
    padding: 0 5px;
    opacity: 0;
    top: 7px;
    color: $brown;
    background-color: #fff;
    transition: top 0.2s, opacity 0.2s, background-color 0.2s;
  }

  &--error {
    #{$self}__label {
      top: -11px;
      opacity: 1;
      color: $error-red;
    }

    #{$self}__control {
      border-color: $error-red;
      box-shadow: 0 0 2px 0 $error-red;
    }
  }

  &--non-empty #{$self}__label,
  &__control:focus ~ #{$self}__label {
    top: -11px;
    opacity: 1;
    transition: top 0.2s 0.1s, opacity 0.3s, background-color 0.2s 0.1s;
  }

  &--bigger {
    #{$self}__control {
      min-height: 56px;
      font-size: 1.1rem;
      font-weight: $bold;

      &::placeholder {
        font-weight: $regular;
      }
    }

    #{$self}__error {
      font-size: 0.9rem;
    }

    #{$self}__label {
      font-size: 1rem;
    }
  }
}
</style>
