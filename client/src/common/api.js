import axios from 'axios';

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const api = 'http://localhost:9000/api/';

export function index() {
  return axios.get(api, { headers: jsonHeaders })
}

export function messagesGet() {
  return axios.get(`${api}messages/`, { headers: jsonHeaders })
}


export function messagesGetOne(pk) {
  return axios.get(`${api}messages/${pk}/`, { headers: jsonHeaders })
}
