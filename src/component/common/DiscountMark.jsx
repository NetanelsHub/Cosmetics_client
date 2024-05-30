import React from "react";

const DiscountWatermark = ({ discount }) => {
  return (
    <div className="absolute top-2 left-2 bg-customGold text-black  text-xs font-bold px-2 py-1 rounded-full flex items-center justify-center w-12 h-12">
      {discount}% OFF
    </div>
  );
};

export default DiscountWatermark;
