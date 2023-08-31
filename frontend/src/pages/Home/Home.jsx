import React from "react";
import homeImg from "../../../public/home1.png";
import Slider from "../../Components/Slider/Slider";
import Button from "../../Components/Button";
import Card from "../../Components/Pizza/Card";
import TextWrapper from "../../Components/TextWrapper";

function Home() {
  let day = new Date().toLocaleString("en-us", { weekday: "long" });
  let imgList = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627461985459-51600559fffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const TextWrapper = (text, classList) => {
    return <span className={`text-orange-500 ${classList}`}> {text}</span>;
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-6 ">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse self-start relative ">
          <Slider imgList={imgList} />
          <div className="">
            <h3 className="text-4xl font-bold">
              Todays {TextWrapper("Offer", "font-semibold")}
            </h3>
            <p className="py-2 ml-1 lg:ml-0">
              {TextWrapper(day, "font-semibold")} special offer get 3 pizza for
              just {TextWrapper(699, "font-semibold")}
            </p>
            <p className="text-gray-500 py-2 ml-1 lg:ml-0">
              Choose your favorite non-veg pizzas from the Pizza menu. Get fresh
              non-veg pizza with your choice of crusts & toppings
            </p>

            <Button title="Order Now" styles="btn-md mt-3" />
          </div>
        </div>
      </div>
      <div className="w-full px-6 h-full space-y-8">
        <div className="divider w-full border-opacity-50 ">
          {TextWrapper("Top Picks", "text-2xl font-bold uppercase")}
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {[1, 2, 3].map((e) => {
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

export default Home;
