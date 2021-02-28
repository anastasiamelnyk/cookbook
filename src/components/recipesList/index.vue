<template>
  <div class="recipes-list">
    <ListHeader class="mb-10" />
    <ul
      v-if="recipesList"
      class="recipes-list__list"
    >
      <li
        v-for="(recipe, id) in recipesList"
        :key="id"
        :recipe="recipe"
        is="RecipeItem"
        class="mb-3"
      />
    </ul>
    <p v-else class="recipes-list__no-items">
      You have no recipes yet. Start adding some :)
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ListHeader from './ListHeader';
import RecipeItem from './RecipeItem';

export default {
  name: 'RecipesList',
  props: {},
  components: {
    ListHeader,
    RecipeItem,
  },
  data: () => ({
    recipesList: {},
  }),
  computed: {},
  async created() {
    this.recipesList = await this.getRecipesList();
  },
  methods: {
    ...mapActions([
      'getRecipesList',
    ]),
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.recipes-list {
  &__list {
    padding-left: 0;
    margin: 0;
  }

  &__no-items {
    text-align: center;
  }
}
</style>