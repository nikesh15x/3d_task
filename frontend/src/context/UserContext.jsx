import React, { useState, createContext, useEffect } from "react";
import productActions from "../Helpers/productActions";
import OrderActions from "../Helpers/OrderActions";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    _id: "",
  });
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const modalId = "my_modal_3";
  const clearContext = () => {
    localStorage.clear();
    setUser({
      name: "",
      _id: "",
    });
    setToken("");
    setAuthenticated(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    setToken(token);
  }, []);

  const fetchCartItems = async () => {
    try {
      let data = await OrderActions.getCartsItems();
      setCartItems(data.data[0].pizzas);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      let data = await productActions.getProducts();
      if (data.status_code === 200) {
        setProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [authenticated]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        authenticated,
        setAuthenticated,
        clearContext,
        cartItems,
        setCartItems,
        modalId,
        products,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
