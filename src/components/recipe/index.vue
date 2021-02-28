<template>
  <Wrapper class="recipe">
    <transition name="fade">
      <component
        :is="currentComponent"
        :recipe="recipeData"
        :is-editing="isEditing"
        :parent="parent"
        @edit="editRecipe"
        @recipe-saved="isEditing = false"
      />
    </transition>
  </Wrapper>
</template>

<script>
import { isEmpty } from '~assets/js/utils';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Wrapper from '~components/common/Wrapper';
import Show from './Show';
import Add from './Add';

export default {
  name: 'Recipe',
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
    Wrapper,
    Show,
    Add,
  },
  data: () => ({
    isEditing: false,
  }),
  computed: {
    ...mapState({
      recipeRaw: state => state.recipeCRUD.recipe,
      parentPath: state => state.recipeCRUD.parentPath,
    }),
    ...mapGetters([
      'recipeFormatted'
    ]),
    currentComponent() {
      return this.isEditing ? 'Add' : 'Show';
    },
    currentRecipe() {
      return this.$route.params.recipe;
    },
    mainParentData() {
      return this.isEditing ? this.recipeRaw : this.recipeFormatted;
    },
    recipeData() {
      return isEmpty(this.recipe) ? this.mainParentData : this.recipe;
    },
  },
  created() {
    if (isEmpty(this.recipe)) this.getRecipe(this.currentRecipe);
  },
  methods: {
    ...mapActions([
      'getRecipe',
    ]),
    ...mapMutations([
      'setParentPath',
    ]),
    editRecipe(parentPath) {
      this.isEditing = true;
      this.setParentPath(parentPath || `${this.currentRecipe}`);
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>