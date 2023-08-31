import React from "react";
import Card from "../../Components/Pizza/Card";
import TextWrapper from "../../Components/TextWrapper";

function Menu() {
  return (
    <div className=" flex justify-center items-center flex-col gap-5 scroll-smooth">
      {" "}
      <div className="divider w-full border-opacity-50 ">
        {TextWrapper("Our Menu", "font-semibold text-4xl")}
      </div>
      <div>
        <div className="flex flex-wrap gap-5 justify-center items-center mx-2 ">
          {[1, 2, 3,6,7,8,5,34].map((e) => {
            return (
              <React.Fragment key={e}>
                <Card key={e} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
