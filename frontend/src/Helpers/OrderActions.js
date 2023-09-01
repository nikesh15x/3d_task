import httpClient from "../axios.config";

export default {
  getCartsItems: async () => {
    try {
      let { data } = await httpClient.get('/cart')
      return data
    } catch (err) {
      return err
    }
  },

  addCart: async (payload) => {
    try {
      let { data } = await httpClient.post('/add-cart', { cart_items: payload })
      return data
    } catch (err) {
      return err
    }
  }
}