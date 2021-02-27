import { axiosInstanceStore } from '../../plugins/axios'; 
const $axios = axiosInstanceStore;

const state = {};

const getters = {};

const mutations = {};

const actions = {
  addRecipe(_, payload) {
    $axios.post('/recipes.json', payload).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  },
};

export default { state, getters, mutations, actions };
