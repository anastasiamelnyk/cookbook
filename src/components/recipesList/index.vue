<template>
  <div class="list">
    <ListHeader />
  </div>
</template>

<script>
import ListHeader from './ListHeader';

export default {
  name: 'RecipesList',
  props: {},
  components: {
    ListHeader,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';
</style>