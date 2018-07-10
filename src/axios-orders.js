import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://buger-builder.firebaseio.com/'
});

export default instance;