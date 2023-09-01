import React, { useContext } from "react";

import Card from "../../Components/Pizza/Card";
import TextWrapper from "../../Components/TextWrapper";
import { UserContext } from "../../context/UserContext";

function Menu() {
  const { products } = useContext(UserContext);

  return (
    <div className=" flex justify-center items-center flex-col gap-5 scroll-smooth">
      {" "}
      <div className="divider w-full border-opacity-50 ">
        {TextWrapper("Our Menu", "font-semibold text-4xl")}
      </div>
      <div>
        <div className="flex flex-wrap gap-5 justify-center items-center mx-2 ">
          {products?.map((e, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  img={e.img}
                  name={e.name}
                  desc={e.description}
                  price={e.price}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
