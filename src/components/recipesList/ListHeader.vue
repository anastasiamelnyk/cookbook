<template>
  <div class="list-header">
    <Heading class="list-header__heading">
      Your recipes
    </Heading>
    <Button @click="$router.push('/add')">
      Add new
    </Button>
  </div>
</template>

<script>
import Heading from '~components/common/Heading';
import Button from '~components/common/Button';

export default {
  name: 'RecipesListHeader',
  props: {},
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