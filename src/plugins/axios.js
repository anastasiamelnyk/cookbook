import axios from 'axios';
import Vue from 'vue';

const baseUrl = 'https://cookbook-46f7f-default-rtdb.europe-west1.firebasedatabase.app';

const createInstance = baseURL => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const axiosInstanceStore = createInstance(baseUrl);

export const axiosInstance = {
  install() {
    Vue.prototype.$axios = axiosInstance
  }
};
