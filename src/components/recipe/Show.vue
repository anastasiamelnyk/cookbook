<template>
  <article class="py-15 show">
    <div class="mb-4 show__header">
      <Heading>
        {{ title }}
      </Heading>
      <Button @click="$emit('edit', `${parent}/${recipe.id || $route.params.recipe}`)">
        Edit
      </Button>
    </div>
    <div class="mb-4 show__wrapper">
      <img
        v-if="localRecipe.img"
        :src="localRecipe.img"
        :alt="`${localRecipe.title} image`"
        class="show__image"
      />
      <section class="mb-4 show__brief">
        <p>
          <span class="mr-1 bold">Created:</span>
          <span>{{ formatTime(localRecipe.created) }}</span>
        </p>
        <p>
          <span class="mr-1 bold">Modified:</span>
          <span>{{ formatTime(localRecipe.modified) }}</span>
        </p>
        <Select
          v-if="versions.length"
          v-model="currentVersion"
          :options="versions"
          class="mb-1"
        ></Select>
        <p v-if="localRecipe.cookingTime">
          <span class="mr-1 bold">Cooking time:</span>
          <span>{{ localRecipe.cookingTime }}</span>
        </p>
        <p v-if="localRecipe.portions">
          <span class="mr-1 bold">Portions:</span>
          <span>{{ localRecipe.portions }}</span>
        </p>
      </section>
    </div>
    <section
      v-if="localRecipe.ingredients && localRecipe.ingredients.length"
      class="mb-4 show__ingredents"
    >
      <Heading type="h4" class="mb-1">
        Ingredients:
      </Heading>
      <ul>
        <li
          v-for="ingredient in localRecipe.ingredients"
          :key="ingredient.name"
        >
          <span class="mr-1">{{ ingredient.name }}:</span>
          <span class="mr-1">{{ ingredient.quantity }}</span>
          <span>{{ ingredient.unit }}</span>
        </li>
      </ul>
    </section>
    <section
      v-if="localRecipe.description"
      class="mb-4 show__description"
    >
      <Heading type="h4" class="mb-1">
        Description:
      </Heading>
      <p>
        {{ localRecipe.description }}
      </p>
    </section>
    <section
      v-if="localRecipe.cookingSteps && localRecipe.cookingSteps.length"
      class="mb-15 show__steps"
    >
      <Heading type="h4" class="mb-1">
        Cooking steps:
      </Heading>
      <ol>
        <li
          v-for="step in localRecipe.cookingSteps"
          :key="step.description"
        >
          {{ step.description }}
        </li>
      </ol>
    </section>
    <section class="show__related">
      <RecipesList
        :list="localRecipe.relatedRecipes || []"
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
import Select from '~components/common/Select';
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
    Select,
    RecipesList,
  },
  data: () => ({
    versions: [],
    currentVersion: '',
    localRecipe: {},
  }),
  computed: {
    recipeId() {
      return this.localRecipe.id || this.$route.params.recipe;
    },
    title() {
      return this.localRecipe.title
        ? capitalizeFirstLetter(this.localRecipe.title)
        : '';
    },
  },
  watch: {
    currentVersion(value) {
      if (value) {
        if (value === 'latest') {
          this.localRecipe = { ...this.recipe };
        } else {
          this.localRecipe = {
            ...this.recipe.versions[value],
            relatedRecipes: this.recipe.relatedRecipes,
          };
        }
      }
    },
    recipe: {
      handler(value) {
        if (value) this.localRecipe = { ...value };
        if (value.versions) this.createVersions();
      },
      immediate: true,
    },
  },
  methods: {
    capitalizeFirstLetter,
    formatTime(time) {
      return moment(time).format('DD MMM YYYY, HH:mm')
    },
    createVersions() {
      this.versions = [
      ...Object.keys(this.recipe.versions)
        .map((time, index) => ({
          id: index,
          value: time,
          displayValue: this.formatTime(Number(time))
        })),
        {
          id: this.recipe.versions + 2,
          value: 'latest',
          displayValue: 'Latest version',
        },
        {
          id: this.recipe.versions + 1,
          value: '',
          displayValue: 'Select version',
          disabled: true
        },
    ];
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