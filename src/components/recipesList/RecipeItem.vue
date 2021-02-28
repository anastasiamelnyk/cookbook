<template>
  <div class="recipe-item">
    <div
      class="recipe-item__wrapper"
      :class="{ 'recipe-item__wrapper--related-opened': isFullRelatedShown }"
      @click="showRecipe"
    >
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
          <p v-if="recipe.cookingTime" class="recipe-item__info">
            <span class="bold">Cooking time:</span> <span>{{ recipe.cookingTime }}</span>
          </p>
          <p v-if="recipe.portions" class="recipe-item__info">
            <span class="bold">Portions:</span> <span>{{ recipe.portions }}</span>
          </p>
        </div>
      </div>
      <div>
        {{ recipe.description | shorten(100) }}
      </div>
    </div>
    <template v-if="isRelated">
      <transition name="fade">
        <Recipe
          v-if="isFullRelatedShown"
          :recipe="recipe"
          :parent="parent"
          class="px-6 recipe-item__related"
        />
      </transition>
    </template>
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
    isRelated: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: String,
      default: '',
    },
  },
  components: {
    Heading,
    Recipe: () => import('~components/recipe'),
  },
  data: () => ({
    isFullRelatedShown: false,
  }),
  computed: {},
  methods: {
    capitalizeFirstLetter,
    showRecipe() {
      if (this.isRelated) this.isFullRelatedShown = !this.isFullRelatedShown;
      else this.$router.push(`/${this.recipe.id}`);
    },
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
  &__wrapper {
    display: flex;
    flex-flow: column;
    padding: 8px 0;
    box-shadow: 0 1px 2px 0 $pink-gray;
    cursor: pointer;
    transition: background-color 0.3s;

    &--related-opened {
      background-color: rgba($pink-gray, 0.5);
    }
  }

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

  &__related {
    background-color: rgba($pink-gray, 0.15);
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
    &__wrapper {
      flex-flow: row;
    }

    &__breefs {
      margin-right: 32px;
    }

    &__heading,
    &__info {
      width: max-content;
      max-width: 200px;
    }
  }
}
</style>
