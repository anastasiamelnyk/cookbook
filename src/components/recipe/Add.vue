<template>
  <section class="add-recipe">
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
            :name="`ingredient-name-${index}`"
            label="Ingredient name"
          />
          <Input
            v-model="ingredient.quantity"
            type="number"
            :name="`ingredient-quantity-${index}`"
            label="Quantity"
          />
          <div class="add-recipe__unit-wrapper">
            <Select
              v-model="ingredient.unit"
              :options="unitsFormatted"
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
        <ol class="mb-2 add-recipe__steps">
          <li
            v-for="(step, index) in recipeData.cookingSteps"
            :key="index"
            class="add-recipe__step"
          >
            <div class="add-recipe__step-wrapper">
              <Input
                v-model="step.description"
                :name="`step-${index}`"
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
    <Button class="mb-8" @click="saveRecipe">
      Save a recipe
    </Button>
  </section>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { deleteEmpty } from '~assets/js/utils';
import { recipeModel, ingredientModel, cookingStepModel } from '~assets/js/models';
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
    recipeData: recipeModel(),
    ingredientModel: ingredientModel(),
    cookingStepModel: cookingStepModel(),
  }),
  computed: {
    ...mapGetters([
      'unitsFormatted',
    ]),
  },
  created() {
    this.getUnits();
    if (!this.recipeData.ingredients.length) this.addNewIngredient();
    if (!this.recipeData.cookingSteps.length) this.addNewStep();
  },
  methods: {
    ...mapActions([
      'getUnits',
      'addRecipe',
    ]),
    ...mapMutations([
      'setAddModalShown',
    ]),
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
    saveRecipe() {
      const recipe = {
        ...this.recipeData,
        created: this.recipeData.created || moment.now().valueOf(),
        modified: moment.now().valueOf(),
        ingredients: deleteEmpty(this.recipeData.ingredients),
        cookingSteps: deleteEmpty(this.recipeData.cookingSteps),
      };

      this.addRecipe(recipe)
        .then(() => { this.setAddModalShown(false) })
        .catch(err => { console.log(err) });
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.add-recipe {
  padding: 56px 16px 24px 16px;

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
    padding: 56px 56px 24px 56px;

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