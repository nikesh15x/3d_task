import React from "react";

function Slider({ imgList }) {
  return (
    <div className="carousel w-full lg:h-[25rem] md:h-[22rem] h-[18rem]">
      {imgList.map((e, index) => {
        return (
          <div id={index} className="carousel-item relative w-full" key={index}>
            <img src={e} className="w-full rounded-box" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={index === 0 ? `#${imgList.length - 1}` : `#${index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={index === imgList.length - 1 ? `#0` : `#${index + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
