<template>
  <div>
    <Wrapper class="pt-15 home">
      <RecipesList :list="recipesListFiltered" />
    </Wrapper>
    <transition name="fade">
      <AddRecipe
        v-if="isAddModalShown"
        @recipe-saved="getRecipesList"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Wrapper from '~components/common/Wrapper';
import RecipesList from '~components/recipesList';
import AddRecipe from './AddRecipe';

export default {
  name: 'Home',
  props: {},
  components: {
    Wrapper,
    RecipesList,
    AddRecipe,
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'isAddModalShown',
    ]),
    ...mapGetters([
      'recipesListFiltered',
    ]),
  },
  created() {
    this.getRecipesList();
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
</style>