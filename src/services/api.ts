import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rafaelcodomingues-proffy.herokuapp.com/',
});

export default api;
