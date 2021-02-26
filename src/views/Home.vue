<template>
  <Wrapper class="pt-15 home">
    <Heading>Your recipes</Heading>
    <Heading type="h3">Fried chicken</Heading>
    <Heading type="h4">Ingredients</Heading>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aliquid, inventore delectus, in tempora harum, sint nulla animi ab fugiat cupiditate. Officiis dolor distinctio sequi, enim fuga laboriosam. At, non!
    </p>
  </Wrapper>
</template>

<script>
import Wrapper from '~components/common/Wrapper';
import Heading from '~components/common/Heading';

export default {
  name: 'Home',
  props: {},
  components: {
    Wrapper,
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>