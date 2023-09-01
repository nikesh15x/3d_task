import { useState, useContext } from "react";
import React from "react";
import Button from "../Button";
import { UserContext } from "../../context/UserContext";

function CartModal({ showModal, handleChange, pizzaObject }) {
  const [items, setItems] = useState([]);
  const { setCartItems, cartItems } = useContext(UserContext);

  const handleChecked = (e) => {
    let item = pizzaObject?.price[e]._id;
    if (!items.includes(item)) {
      setItems([...items, item]);
    } else {
      let filterItems = items.filter((e) => {
        if (e !== item) {
          return e;
        }
      });
      setItems(filterItems);
    }
  };

  const handleAddtoCart = () => {
    if (items.length < 1) {
      alert("Please select an order");
    }
    let data = [];
    pizzaObject?.price?.map((e) => {
      if (items.includes(e._id)) {
        data.push({
          name: pizzaObject.name,
          price: e.price,
          quantity: 1,
          size: e.size,
          total_price: e.price,
        });
      }
    });
    setCartItems([...cartItems, ...data]);
  };

  return (
    <>
      <div className={showModal ? "modal modal-open modal-middle" : "modal"}>
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center">Details </h3>
          <div className="card">
            <img className="rounded-3xl" src={pizzaObject.img} alt="Pizza" />
            <div className="card-body">
              <h2 className="card-title">{pizzaObject?.name}</h2>
              <div className="flex flex-row gap-8 justify-start items-center space-x-6">
                {pizzaObject?.price?.map((e, index) => {
                  return (
                    <div className="" key={index}>
                      <p className="font-semibold ">{e.size}</p>
                      <p> {e.price} Rs</p>
                      <input
                        type="checkbox"
                        value={index}
                        className="checkbox checkbox-sm"
                        onChange={(e) => {
                          handleChecked(e.target.value);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="card-actions justify-end">
                <Button title="Add to Cart" func={handleAddtoCart} />
                <Button
                  title="Close"
                  styles="bg-gray-200 hover:dark:bg-gray-300"
                  func={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
