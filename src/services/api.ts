import axios from 'axios';

//https://rafaelcodomingues-proffy.herokuapp.com/
const api = axios.create({
  baseURL: 'https://rafaelcodomingues-proffy.herokuapp.com',
});

export default api;
