<template>
  <Wrapper
    class="py-10 add-recipe"
    @click.native="setAddModalShown(false)"
  >
    <Add
      class="add-recipe__component"
      @click.native.stop
    />
  </Wrapper>
</template>

<script>
import { mapMutations } from 'vuex';
import Wrapper from '~components/common/Wrapper';
import Add from '~components/recipe/Add';

export default {
  name: 'AddRecipe',
  props: {},
  components: {
    Wrapper,
    Add,
  },
  data: () => ({}),
  computed: {},
  methods: {
    ...mapMutations([
      'setAddModalShown',
    ]),
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.add-recipe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($black, 0.9);

  &__component {
    flex-grow: 1;
    background-color: #fff;
    padding: 0 16px 24px 16px;
  }

  @media (min-width: $media-sm) {
    &__component {
      padding: 0 56px 24px 56px;
    }
  }
}
</style>