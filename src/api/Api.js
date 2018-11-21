import axios from 'axios';


let _token = null;

export const setToken = (token) => {
  _token = token;

  localStorage.setItem('token', token);

  axios.defaults.headers.common.Authorization = _token
    ? `Bearer ${_token}`
    : null;
};

export const removeToken = () => {
  localStorage.removeItem('token');

  _token = null;
  axios.defaults.headers.common.Authorization = null;
};


export const isAuthenticated = () => !!_token;

export const initApi = () => {
  const token = localStorage.getItem('token');

  _token = token;

  setToken(token);
};



export const Auth = {
  login(body) {
    return axios.post(`/api/v2/auth/login`, body);
  },
  register(body) {
    return axios.post(`/api/v2/auth/register`, body);
  },
  logout(){
    return removeToken();
  }
};




export const Products = {
  fetchAllProducts() {
    return axios.get(`/api/v2/products`)
  },
  fetchSomeProducts(ids) {
    return axios.get(`/api/v2/products?${ids.map()}`)
  },
  updateProduct(id, body) {
    return axios.patch(`/api/v2/products/${id}`, body)
  },
  removeProduct(id){
    return axios.delete(`/api/v2/products/${id}`)
  },
  createProduct(body) {
    return axios.post(`/api/v2/products`, body)
  }
};



export const User = {
  getCurrent() {
    return axios.get(`/api/v2/users/current`);
  }
};
