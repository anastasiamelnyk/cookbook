<template>
  <div class="list-header">
    <Heading
      :type="isRelated ? 'h3' : 'h2'"
      class="list-header__heading"
    >
      {{ isRelated ? 'Related' : 'Your' }} recipes
    </Heading>
    <Button @click="$emit('add-new')">
      Add new
    </Button>
  </div>
</template>

<script>
import Heading from '~components/common/Heading';
import Button from '~components/common/Button';

export default {
  name: 'RecipesListHeader',
  props: {
    isRelated: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Heading,
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.list-header {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  &__heading {
    margin-bottom: 8px;
  }

  @media (min-width: $media-xs-add) {
    flex-flow: row;

    &__heading {
      margin-bottom: 0;
    }
  }
}
</style>