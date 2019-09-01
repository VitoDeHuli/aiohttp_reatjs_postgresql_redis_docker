import axios from 'axios';

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const api = 'http://localhost:9000/api/';

export function index() {
  return axios.get(api, { headers: jsonHeaders })
}
