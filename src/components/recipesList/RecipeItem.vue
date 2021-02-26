<template>
  <div class="recipe-item">
    <div class="recipe-item__breefs">
      <img
        src="https://picsum.photos/200/300"
        alt="Recipe image"
        class="mr-4 recipe-item__image"
      />
      <div>
        <Heading type="h4" class="recipe-item__heading">
          Recipe Name
        </Heading>
        <p class="recipe-item__info">
          <span class="bold">Cooking time:</span>
          <span>&nbsp;1,5&nbsp;hours</span>
        </p>
        <p class="recipe-item__info">
          <span class="bold">Portions:</span>
          <span>&nbsp;8</span>
        </p>
      </div>
    </div>
    <div>
      {{ description | shorten(100) }}
    </div>
  </div>
</template>

<script>
import Heading from '~components/common/Heading';

export default {
  name: 'RecipeItem',
  props: {},
  components: {
    Heading,
  },
  data: () => ({
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Distinctio blanditiis quod voluptates possimus,
      magnam ab fugit provident consequuntur temporibus
      corrupti repellendus sint voluptatibus minus alias nemo aliquid.
      Ex, porro commodi.`,
  }),
  computed: {},
  methods: {},
  filters: {
    shorten(value, charsQuantity) {
      if (!value) return '';

      return value.length <= charsQuantity
        ? value
        : `${value.split('').splice(0, charsQuantity).join('')}...`;
    }
  }
};
</script>

<style lang="scss">
@import '~assets/scss/_variables';

.recipe-item {
  display: flex;
  flex-flow: column;
  padding: 8px 0;
  box-shadow: 0 1px 2px 0 $pink-gray;

  &__breefs {
    display: flex;
    margin-bottom: 8px;
  }

  &__image {
    width: 150px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
  }

  &__info {
    display: none;
  }

  @media (min-width: $media-xs-add) {
    &__info {
      display: block;
    }

    &__heading {
      margin-bottom: 8px;
    }
  }

  @media (min-width: $media-sm) {
    flex-flow: row;

    &__breefs {
      margin-right: 32px;
    }

    &__heading,
    &__info {
      width: max-content;
    }
  }
}
</style>
