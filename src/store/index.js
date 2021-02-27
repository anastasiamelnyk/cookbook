import Vue from 'vue';
import Vuex from 'vuex';

import recipeCRUD from './modules/recipeCRUD';

import { axiosInstanceStore } from '../plugins/axios';

Vue.use(Vuex);
const $axios = axiosInstanceStore;

export default new Vuex.Store({
  state: {
    unitsOfMeasure: {},
  },
  getters: {
    unitsFormatted: state => Object.entries(state.unitsOfMeasure)
      .map(([key, value]) => ({ ...value, id: key })),
  },
  mutations: {
    setUnits(state, payload) {
      state.unitsOfMeasure = payload;
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
    getRecipesList() {
      return $axios.get('/recipes.json')
        .then(({ data }) => data )
        .catch(err => Promise.reject(err));
    },
  },
  modules: {
    recipeCRUD,
  },
});
