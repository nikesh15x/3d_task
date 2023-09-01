import { useState, useEffect, useContext } from "react";
import React from "react";
import { UserContext } from "../context/UserContext";
import TextWrapper from "./TextWrapper";
import OrderAction from "../Helpers/OrderActions";

function Modal() {
  const { cartItems, setCartItems, authenticated } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    calCulateTotalPrice();
  }, [cartItems]);

  const handleCheckOut = () => {
    updateServerItems();
    alert("Order Placed Successfully!!!");
 
  };

  const updateServerItems = async () => {
    try {
      let data = await OrderAction.addCart(cartItems);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = (index) => {
    const item = cartItems.filter((e, i) => {
      if (index === i) {
        e.quantity += 1;
        e.total_price = e.price * e.quantity;
        return e;
      }
      return e;
    });
    setCartItems(item);
  };

  const handleDecrement = (index) => {
    const item = cartItems.filter((e, i) => {
      if (index === i) {
        e.quantity -= 1;
        if (e.quantity > 0) {
          e.total_price = e.price * e.quantity;
          return e;
        }
      }
      if (e.quantity > 0) {
        return e;
      }
    });
    setCartItems(item);
  };

  const calCulateTotalPrice = () => {
    let total = cartItems.reduce((acc, item) => {
      return acc + item.total_price;
    }, 0);
    setTotal(total);
  };

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center">Carts Items!</h3>
          {cartItems?.length < 1 ? (
            <p className="font-semibold text-center text-2xl">
              Oops Your Cart Is{" "}
              <span className="text-orange-500"> EMPTY!!!</span>
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className="text-center">
                  <tr>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th className="text-center">quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {cartItems?.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.name}</td>
                        <td>{e.size}</td>
                        <td>{e.price}</td>
                        <td>
                          <div className="join">
                            <button
                              className="btn join-item btn-xs bg-red-400"
                              onClick={() => handleDecrement(index)}
                            >
                              -
                            </button>
                            <button className="btn btn-xs btn-ghost join-item">
                              {e.quantity}
                            </button>
                            <button
                              className="btn join-item btn-xs bg-green-400"
                              onClick={() => handleIncrement(index)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>{e.total_price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="divider w-full border-opacity-50 "></div>
              <div className="flex justify-end items-center space-x-3 lg:pr-6">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleCheckOut}
                >
                  {" "}
                  Checkout
                </button>
                <strong> Total : {total}</strong>
              </div>
            </div>
          )}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}

export default Modal;
