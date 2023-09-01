import httpClient from "../axios.config";

export default {
  getProducts: async () => {
    try {
      let { data } = await httpClient.get('products');
      return data
    } catch (error) {
      return error
    }
  },

}