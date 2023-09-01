import httpClient from '../axios.config';

export default {
  register: async (payload) => {
    try {
      let { data } = await httpClient.post('register', payload);
      return data;
    } catch (error) {
      return error
    }
  },
  login: async (email, password) => {
    try {
      let { data } = await httpClient.post('login', { email: email, password: password });
      return data;
    } catch (error) {
      return error
    }
  },
  logout: async () => {
    try {
      let { data } = await httpClient.get('logout');
      return data;
    } catch (error) {
      return error
    }
  }
}