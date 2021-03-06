import { axiosInstanceStore } from '../../plugins/axios'; 
const $axios = axiosInstanceStore;

import { objToArr, sortAlphabetically } from '../../assets/js/utils';

const filterRelatedRecipes = recipe => {
  if (!recipe.relatedRecipes) return recipe;

  return {
    ...recipe,
    relatedRecipes: sortAlphabetically(objToArr(recipe.relatedRecipes), 'title')
      .map(cur => filterRelatedRecipes(cur)),
  };
};

const state = {
  recipe: {},
  parentPath: '',
};

const getters = {
  recipeFormatted: state => filterRelatedRecipes(state.recipe),
};

const mutations = {
  setRecipe(state, payload) {
    state.recipe = payload;
  },
  setParentPath(state, payload) {
    state.parentPath = payload;
  },
};

const actions = {
  addRecipe({ state, commit }, payload) {
    return $axios.post(`/recipes${state.parentPath}.json`, payload)
      .then(result => {
        commit('setParentPath', '');
        return result;
      })
      .catch(err => { Promise.reject(err) });
  },
  editRecipe({ state, commit, dispatch }, payload) {
    return $axios.put(`/recipes${state.parentPath}.json`, payload.recipe)
    .then(result => {
      dispatch('getRecipe', payload.parent)
      commit('setParentPath', '');
      return result;
    })
    .catch(err => { Promise.reject(err) });
  },
  getRecipe({ commit }, payload) {
    return $axios.get(`/recipes/${payload}.json`)
      .then(({ data }) => commit('setRecipe', data))
      .catch(err => { Promise.reject(err) });
  },
};

export default { state, getters, mutations, actions };
