<template>
  <div class="recipe-item">
    <div class="recipe-item__breefs">
      <img
        :src="recipe.img"
        :alt="`${recipe.title} image`"
        class="mr-4 recipe-item__image"
      />
      <div>
        <Heading type="h4" class="recipe-item__heading">
          {{ capitalizeFirstLetter(recipe.title) }}
        </Heading>
        <p class="recipe-item__info">
          <span class="bold">Cooking time:</span> <span>{{ recipe.cookingTime }}</span>
        </p>
        <p class="recipe-item__info">
          <span class="bold">Portions:</span> <span>{{ recipe.portions }}</span>
        </p>
      </div>
    </div>
    <div>
      {{ recipe.description | shorten(100) }}
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from '~assets/js/utils';
import Heading from '~components/common/Heading';

export default {
  name: 'RecipeItem',
  props: {
    recipe: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {
    capitalizeFirstLetter,
  },
  filters: {
    shorten(value, charsQuantity) {
      if (!value) return '';

      return value.length <= charsQuantity
        ? value
        : `${value.split('').splice(0, charsQuantity).join('')}...`;
    }
  }
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.recipe-item {
  display: flex;
  flex-flow: column;
  padding: 8px 0;
  box-shadow: 0 1px 2px 0 $pink-gray;
  cursor: pointer;

  &__breefs {
    display: flex;
    margin-bottom: 8px;
  }

  &__image {
    width: 150px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
  }

  &__info {
    display: none;
  }

  @media (min-width: $media-xs-add) {
    &__info {
      display: block;
    }

    &__heading {
      margin-bottom: 8px;
    }
  }

  @media (min-width: $media-sm) {
    flex-flow: row;

    &__breefs {
      margin-right: 32px;
    }

    &__heading,
    &__info {
      width: max-content;
    }
  }
}
</style>
