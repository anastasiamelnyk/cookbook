<template>
  <div>
    <Wrapper>
      <transition name="fade">
        <component :is="currentComponent" />
      </transition>
    </Wrapper>
    <transition name="fade">
      <AddRecipe v-if="isAddModalShown" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  }),
  computed: {
    ...mapState([
      'isAddModalShown',
    ]),
    currentComponent() {
      return this.isEditing ? 'Add' : 'Show';
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>