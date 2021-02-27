<template>
  <Wrapper class="add-recipe">
    <Add />
  </Wrapper>
</template>

<script>
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
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>