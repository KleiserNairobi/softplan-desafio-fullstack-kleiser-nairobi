import axios from 'axios';

var url = 'http://localhost:8080';
//var url = window.location.protocol + "//" + window.location.host;

const apiBack = axios.create({
  baseURL: url,
  headers: {Accept: 'application/json'}
});

apiBack.defaults.headers.common['Content-Type'] = 'application/json';

export default apiBack;