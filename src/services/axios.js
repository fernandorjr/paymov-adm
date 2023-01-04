import axios from 'axios';
import createStore from "@/store/index"

var request = new XMLHttpRequest();
request.open('GET', '/api.json', false),
request.send(null);

var urlAPI = '';
if(request.status === 200){
  var json = JSON.parse(request.responseText);
  urlAPI = json.baseURL;
}

const api = axios.create({
  baseURL: urlAPI,
})

api.interceptors.request.use(async (config) => {
  try {
    let token = createStore.state.guid;

    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default api;