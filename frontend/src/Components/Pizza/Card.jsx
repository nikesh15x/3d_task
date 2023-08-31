import React, { useContext } from "react";
import Ratings from "../Ratings";
import Button from "../Button";
import { UserContext } from "../../context/UserContext";

function Card({ desc, img, name }) {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const { authenticated } = useContext(UserContext);


  const handleBtn = () =>{
    if(authenticated){
      console.log("added to cart");
      return
      }
      alert("Please Login");
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2">
      <div className="card glass w-full card-compact">
        <figure>
          <img
            src="https://images.dominos.co.in/farmhouse.png"
            alt="car!"
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body h-44">
          <h2 className="card-title ">Fiery Sausage & Paprik</h2>
          <p>
            A super spicy chicken pizza with a new spicy peri peri sauce &
            topped with flavorful chicken sausage and red paprika.
          </p>
          <div className="flex items-center justify-between">
            <Ratings quantity={5} selected={randomNumber(1, 4)} />
            <Button title={"Buy Now!"} styles={" btn-sm "} func={handleBtn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
