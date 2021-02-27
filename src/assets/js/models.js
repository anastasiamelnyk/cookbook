export const recipeModel = () => ({
  title: '',
  img: '',
  cookingTime: '',
  portions: '',
  ingredients: [],
  description: '',
  cookingSteps: [],
  created: null,
  modified: null,
  versions: {},
  relatedRecipes: [],
});

export const ingredientModel = () => ({
  name: '',
  quantity: '',
  unit: '',
});

export const cookingStepModel = () => ({
  number: '',
  description: '',
});
