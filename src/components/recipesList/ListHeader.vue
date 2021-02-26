<template>
  <div class="list-header">
    <Heading>
      Your recipes
    </Heading>
    <Button @click="addNewRecipe">
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
  methods: {
    addNewRecipe() {},
  },
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>