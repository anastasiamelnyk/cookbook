<template>
  <div>
    <Recipe />
    <transition name="fade">
      <AddRecipe
        v-if="isAddModalShown"
        @recipe-saved="getRecipe(currentRecipe)"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Wrapper from '~components/common/Wrapper';
import AddRecipe from './AddRecipe';
import Recipe from '~components/recipe/';

export default {
  name: 'ShowRecipe',
  props: {},
  components: {
    Wrapper,
    AddRecipe,
    Recipe,
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'isAddModalShown',
    ]),
    currentRecipe() {
      return this.$route.params.recipe;
    },
  },
  methods: {
    ...mapActions([
      'getRecipe',
    ]),
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>