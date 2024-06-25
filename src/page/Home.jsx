import React from "react";
import Carousel from "../component/common/Carousel";
import bestSeller from "../assets/Best.webp";
import SliderStyle from "../component/common/SliderStyle";

export default function Home() {
  return (
    <>
      <SliderStyle />
      <Carousel endPoint={"discounted"} />
      <div className="w-full h-[30vh] bg-black flex justify-center items-center ml-2 mr-2">
        <img
          src={bestSeller}
          alt="best Seller"
          className="max-w-full max-h-full"
        />
      </div>
      <Carousel endPoint={"topSelling"} />
    </>
  );
}
