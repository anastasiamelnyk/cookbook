import Vue from 'vue';
import Vuex from 'vuex';

import recipeCRUD from './modules/recipeCRUD';

import { axiosInstanceStore } from '../plugins/axios';
import { objToArr, sortAlphabetically } from '../assets/js/utils';

Vue.use(Vuex);
const $axios = axiosInstanceStore;

export default new Vuex.Store({
  state: {
    unitsOfMeasure: {},
    recipesList: {},
    isAddModalShown: false,
  },
  getters: {
    unitsFormatted: state => objToArr(state.unitsOfMeasure),
    recipesListFiltered: state => sortAlphabetically(objToArr(state.recipesList), 'title'),
  },
  mutations: {
    setUnits(state, payload) {
      state.unitsOfMeasure = payload;
    },
    setRecipesList(state, payload) {
      state.recipesList = payload;
    },
    setAddModalShown(state, payload) {
      state.isAddModalShown = payload;
    },
  },
  actions: {
    getUnits({ commit }) {
      return $axios.get('/unitsOfMeasure.json')
        .then(({ data }) => {
          commit('setUnits', data);
        })
        .catch(err =>  Promise.reject(err));
    },
    getRecipesList({ commit }) {
      return $axios.get('/recipes.json')
        .then(({ data }) => { commit('setRecipesList', data) })
        .catch(err => Promise.reject(err));
    },
  },
  modules: {
    recipeCRUD,
  },
});
