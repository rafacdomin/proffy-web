import axios from 'axios';

//https://rafaelcodomingues-proffy.herokuapp.com/
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
