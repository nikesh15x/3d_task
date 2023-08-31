import React from "react";

function Ratings({ quantity, selected }) {
  return (
    <div className="rating rating-md">
      {Array(quantity)
        .fill()
        .map((e, index) => {
          return (
            <input
              key={index}
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={index === selected ? true : false}
              readOnly  
            />
          );
        })}
    </div>
  );
}

export default Ratings;
