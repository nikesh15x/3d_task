import React, { useContext, useState } from "react";
import Ratings from "../Ratings";
import Button from "../Button";
import { UserContext } from "../../context/UserContext";
import CartModal from "../Cart/CartModal";

function Card({ desc, img, name, price }) {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const { authenticated } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handleBtn = () => {
    if (authenticated) {
      setShowModal(true);
      return;
    }
    alert("Please Login");
  };

  const handleChange = () => {
    setShowModal(false);
  };

  return (
    <>
      <CartModal
        showModal={showModal}
        handleChange={handleChange}
        pizzaObject={{
          name: name,
          img: img,
          price: price,
        }}
      />
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2">
        <div className="card glass w-full card-compact">
          <figure>
            <img src={img} alt="car!" className="w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title ">{name}</h2>
            <p>{desc}</p>
            <div className="flex items-center justify-between">
              <Ratings quantity={5} selected={randomNumber(1, 4)} />
              <label
                htmlFor="my_modal_8"
                className="btn bg-orange-400 rounded-2xl hover:dark:bg-orange-500 btn-sm"
                onClick={handleBtn}
              >
                Add To Cart!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
