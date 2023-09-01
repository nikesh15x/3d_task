import React, { useContext } from "react";
import Slider from "../../Components/Slider/Slider";
import Button from "../../Components/Button";
import Card from "../../Components/Pizza/Card";
import TextWrapper from "../../Components/TextWrapper";
import { UserContext } from "../../context/UserContext";

function Home() {
  const { products } = useContext(UserContext);
  let day = new Date().toLocaleString("en-us", { weekday: "long" });
  let imgList = ["/s1.jpeg", "s2.avif", "s3.avif"];

  return (
    <div className="flex flex-col justify-center items-center space-y-6 scroll-smooth ">
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
        <div className="flex flex-wrap gap-5 justify-center ">
          {products?.slice(0, 3)?.map((e, index) => {
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

export default Home;
