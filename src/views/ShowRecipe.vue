<template>
  <div>
    <Wrapper>
      <transition name="fade">
        <component
          :is="currentComponent"
          :recipe="recipeFormatted"
          @edit="isEditing = true"
        />
      </transition>
    </Wrapper>
    <transition name="fade">
      <AddRecipe
        v-if="isAddModalShown"
        @recipe-added="getRecipe(currentRecipe)"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Wrapper from '~components/common/Wrapper';
import AddRecipe from './AddRecipe';
import Show from '~components/recipe/Show';
import Add from '~components/recipe/Add';

export default {
  name: 'ShowRecipe',
  props: {},
  components: {
    Wrapper,
    AddRecipe,
    Show,
    Add,
  },
  data: () => ({
    isEditing: false,
    recipe: {},
  }),
  computed: {
    ...mapState([
      'isAddModalShown',
    ]),
    ...mapGetters([
      'recipeFormatted'
    ]),
    currentComponent() {
      return this.isEditing ? 'Add' : 'Show';
    },
    currentRecipe() {
      return this.$route.params.recipe;
    },
  },
  created() {
    this.getRecipe(this.currentRecipe);
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