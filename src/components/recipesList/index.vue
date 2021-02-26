<template>
  <div class="recipes-list">
    <ListHeader class="mb-10" />
    <ul class="recipes-list__list">
      <li
        v-for="item in 5"
        :key="item"
        is="RecipeItem"
        class="mb-3"
      />
    </ul>
  </div>
</template>

<script>
import ListHeader from './ListHeader';
import RecipeItem from './RecipeItem';

export default {
  name: 'RecipesList',
  props: {},
  components: {
    ListHeader,
    RecipeItem,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.recipes-list {
  &__list {
    padding-left: 0;
    margin: 0;
  }
}
</style>