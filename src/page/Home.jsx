import React, { Suspense } from "react";
// const Carousel = React.lazy(() => import('../component/common/Carousel'));
// import DoorAnimation from "../component/common/DoorAnimation";
import Carousel from "../component/common/Carousel";
import bestSeller from "../assets/Best.png"
import SliderStyle from "../component/common/SliderStyle"

export default function Home() {
  return (
    <>
    <SliderStyle/>
      {/* all the discount product */}
      <Carousel endPoint={"discounted"} />
      <div className=" w-full h-[30vh] bg-black flex justify-center items-center ml-2 mr-2 ">
        <img
          src={bestSeller}
          alt="best Seller"
          className="max-w-full max-h-full"
        />
      </div>

      {/* all best seller product */}
      <Carousel endPoint={"topSelling"} />
    </>
  );
}
