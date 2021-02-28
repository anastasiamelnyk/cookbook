<template>
  <div>
    <Wrapper class="pt-15 home">
      <RecipesList />
    </Wrapper>
    <transition name="fade">
      <AddRecipe v-if="isAddModalShown" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>