<template>
  <section class="pt-15 add-recipe">
    <Input
      v-model="recipeData.title"
      name="title"
      label="Recipe title"
      is-bigger
    />
    <div class="add-recipe__brief">
      <transition name="fade">
        <div class="mb-4 add-recipe__img-wrapper">
          <img
            v-if="recipeData.img"
            :src="recipeData.img"
            :alt="`${recipeData.title} image`"
            class="add-recipe__image"
          />
          <span v-else>
            Yummy image
          </span>
        </div>
      </transition>
      <div>
        <Input
          v-model="recipeData.img"
          name="image"
          label="Recipe image link"
        />
        <Input
          v-model="recipeData.cookingTime"
          name="time"
          label="Cooking time"
        />
        <Input
          v-model="recipeData.portions"
          type="number"
          name="portions"
          label="Portions"
        />
      </div>
    </div>
    <Heading type="h4" class="mb-3">
      Ingredients:
    </Heading>
    <ul class="mb-6 add-recipe__ingredients">
      <li
        v-for="(ingredient, index) in recipeData.ingredients"
        :key="index"
        class="add-recipe__ingredient"
      >
        <div class="add-recipe__ingredient-wrapper">
          <Input
            v-model="ingredient.name"
            name="ingredient-name"
            label="Ingredient name"
          />
          <Input
            v-model="ingredient.quantity"
            type="number"
            name="ingredient-quantity"
            label="Quantity"
          />
          <div class="add-recipe__unit-wrapper">
            <Select
              v-model="ingredient.unit"
              :options="ingredientsUnits"
              :class="{'mr-3': index === recipeData.ingredients.length - 1}"
            />
            <Button
              v-if="index === recipeData.ingredients.length - 1"
              is-add-icon
              @click="addNewIngredient"
            />
          </div>
        </div>
      </li>
    </ul>
    <div class="add-recipe__text">
      <div>
        <Heading type="h4" class="mb-3">
          Description:
        </Heading>
        <Input
          v-model="recipeData.description"
          name="description"
          placeholder="Add some description"
          is-multiline
          :rows="3"
          class="add-recipe__description"
        />
      </div>
      <div>
        <Heading type="h4" class="mb-3">
          Cooking steps:
        </Heading>
        <ol class="mb-6 add-recipe__steps">
          <li
            v-for="(step, index) in recipeData.cookingSteps"
            :key="index"
            class="add-recipe__step"
          >
            <div class="add-recipe__step-wrapper">
              <Input
                v-model="step.value"
                name="step"
                is-multiline
                placeholder="Add a cooking step"
                :rows="3"
                :class="{'mr-3': index === recipeData.cookingSteps.length - 1}"
                @input="step.number = step.number ? step.number : index"
              />
              <Button
                v-if="index === recipeData.cookingSteps.length - 1"
                is-add-icon
                class="mb-4"
                @click="addNewStep"
              />
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import Input from '~components/common/Input';
import Heading from '~components/common/Heading';
import Button from '~components/common/Button';
import Select from '~components/common/Select';

export default {
  name: 'AddRecipe',
  props: {},
  components: {
    Input,
    Heading,
    Button,
    Select,
  },
  data: () => ({
    recipeData: {
      title: '',
      img: '',
      cookingTime: '',
      portions: '',
      ingredients: [],
      description: '',
      cookingSteps: [],
    },
    ingredientModel: {
      name: '',
      quantity: '',
      unit: '',
    },
    cookingStepModel: {
      number: null,
      value: '',
    },
    ingredientsUnits: [
      {
        value: '',
        displayValue: 'Select a unit',
        disabled: true,
      },
      {
        value: 'g',
        displayValue: 'g',
      },
      {
        value: 'mg',
        displayValue: 'mg',
      },
      {
        value: 'kg',
        displayValue: 'kg',
      },
      {
        value: 'oz',
        displayValue: 'oz',
      },
      {
        value: 'lb',
        displayValue: 'lb',
      },
      {
        value: 'ml',
        displayValue: 'ml',
      },
      {
        value: 'l',
        displayValue: 'l',
      },
      {
        value: 'tbsp',
        displayValue: 'tbsp',
      },
      {
        value: 'tsp',
        displayValue: 'tsp',
      },
    ],
  }),
  computed: {},
  created() {
    if (!this.recipeData.ingredients.length) this.addNewIngredient();
    if (!this.recipeData.cookingSteps.length) this.addNewStep();
  },
  methods: {
    addNewStep() {
      this.recipeData.cookingSteps = [
        ...this.recipeData.cookingSteps,
        { ...this.cookingStepModel },
      ];
    },
    addNewIngredient() {
      this.recipeData.ingredients = [
        ...this.recipeData.ingredients,
        { ...this.ingredientModel },
      ];
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.add-recipe {
  ul,
  ol {
    margin: 0;

    li::marker {
      color: $brown-black;
      font-weight: $bold;
    }
  }

  &__unit-wrapper,
  &__step-wrapper {
    display: flex;
    align-items: flex-end;
  }

  &__img-wrapper {
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $pink-sand;
    border: 1px solid $brown;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__ingredients {
    .input {
      padding-bottom: 12px !important;
    }
  }

  &__description {
    &.input {
      padding-bottom: 24px !important;
    }
  }

  &__ingredient {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-sm) {
    &__brief {
      display: grid;
      align-items: center;
      grid-gap: 24px;
      grid-template-columns: repeat(2, 1fr);
    }

    &__ingredient-wrapper {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(3, 1fr);
    }

    &__unit-wrapper {
      padding-bottom: 16px;
    }

    &__ingredient {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-md) {
    &__text {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>