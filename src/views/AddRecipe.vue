<template>
  <Wrapper
    class="py-10 add"
    @click.native="setAddModalShown(false)"
  >
    <Add
      class="add__component"
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

.add {
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
  }
}
</style>