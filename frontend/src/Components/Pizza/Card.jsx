import React from "react";

function Card({ desc, img, name }) {
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
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <button className="btn btn-primary btn-sm ">Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
