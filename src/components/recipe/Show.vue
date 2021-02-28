<template>
  <article class="py-15 show">
    <div class="mb-4 show__header">
      <Heading>
        {{ capitalizeFirstLetter(recipe.title) }}
      </Heading>
      <Button @click="$emit('edit')">
        Edit
      </Button>
    </div>
    <div class="mb-4 show__wrapper">
      <img
        v-if="recipe.img"
        :src="recipe.img"
        :alt="`${recipe.title} image`"
        class="show__image"
      />
      <section class="mb-4 show__brief">
        <p>
          <span class="mr-1 bold">Created:</span>
          <span>{{ formatTime(recipe.created) }}</span>
        </p>
        <p>
          <span class="mr-1 bold">Modified:</span>
          <span>{{ formatTime(recipe.modified) }}</span>
        </p>
        <p v-if="recipe.cookingTime">
          <span class="mr-1 bold">Cooking time:</span>
          <span>{{ recipe.cookingTime }}</span>
        </p>
        <p v-if="recipe.portions">
          <span class="mr-1 bold">Portions:</span>
          <span>{{ recipe.portions }}</span>
        </p>
      </section>
    </div>
    <section
      v-if="recipe.ingredients && recipe.ingredients.length"
      class="mb-4 show__ingredents"
    >
      <Heading type="h4" class="mb-1">
        Ingredients:
      </Heading>
      <ul>
        <li
          v-for="ingredient in recipe.ingredients"
          :key="ingredient.name"
        >
          <span class="mr-1">{{ ingredient.name }}:</span>
          <span class="mr-1">{{ ingredient.quantity }}</span>
          <span>{{ ingredient.unit }}</span>
        </li>
      </ul>
    </section>
    <section
      v-if="recipe.description"
      class="mb-4 show__description"
    >
      <Heading type="h4" class="mb-1">
        Description:
      </Heading>
      <p>
        {{ recipe.description }}
      </p>
    </section>
    <section
      v-if="recipe.cookingSteps && recipe.cookingSteps.length"
      class="mb-15 show__steps"
    >
      <Heading type="h4" class="mb-1">
        Cooking steps:
      </Heading>
      <ol>
        <li
          v-for="step in recipe.cookingSteps"
          :key="step.number"
        >
          {{ step.description }}
        </li>
      </ol>
    </section>
    <section class="show__related">
      <RecipesList
        :list="recipe.relatedRecipes || []"
        :parent="`${parent}/${recipeId}/relatedRecipes`"
        is-related
      />
    </section>
  </article>
</template>

<script>
import moment from 'moment';
import { capitalizeFirstLetter } from '~assets/js/utils';
import Heading from '~components/common/Heading';
import Button from '~components/common/Button';
import RecipesList from '~components/recipesList';

export default {
  name: 'Show',
  props: {
    recipe: {
      type: Object,
      default: () => ({}),
    },
    parent: {
      type: String,
      default: '',
    },
  },
  components: {
    Heading,
    Button,
    RecipesList,
  },
  data: () => ({}),
  computed: {
    recipeId() {
      return this.recipe.id || this.$route.params.recipe;
    },
  },
  created() {},
  methods: {
    capitalizeFirstLetter,
    formatTime(time) {
      return moment(time).format('DD MMM YYYY, HH:mm')
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.show {
  ul,
  ol {
    li::marker {
      color: $brown-black;
      font-weight: $bold;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: $media-sm) {
    &__wrapper {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }
}
</style>