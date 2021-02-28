<template>
  <div class="recipes-list">
    <ListHeader
      :is-related="isRelated"
      class="mb-10"
      @add-new="showAddModal"
    />
    <ul
      v-if="list.length"
      class="recipes-list__list"
    >
      <li
        v-for="recipe in list"
        :key="recipe.id"
        :recipe="recipe"
        :is-related="isRelated"
        :parent="parent"
        is="RecipeItem"
        class="mb-4"
      />
    </ul>
    <p v-else class="recipes-list__no-items">
      No {{ isRelated ? 'related' : '' }} recipes yet. Start adding some :)
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ListHeader from './ListHeader';
import RecipeItem from './RecipeItem';

export default {
  name: 'RecipesList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    isRelated: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: String,
      default: '',
    },
  },
  components: {
    ListHeader,
    RecipeItem,
  },
  data: () => ({}),
  computed: {},
  methods: {
    ...mapMutations([
      'setAddModalShown',
      'setParentPath',
    ]),
    showAddModal() {
      this.setParentPath(this.parent);
      this.setAddModalShown(true);
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.recipes-list {
  &__list {
    padding-left: 0;
    margin: 0;
  }

  &__no-items {
    text-align: center;
  }
}
</style>