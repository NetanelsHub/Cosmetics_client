import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//image import
import pic1 from "../../assets/style/1.jpg";
import pic2 from "../../assets/style/2.jpg";
import pic3 from "../../assets/style/3.jpg";

const imageArray = [pic1, pic2, pic3];

export default function SliderStyle() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    // <div class="image-container grid gap-4 h-1/2">
    //   <img src={pic1} alt="Image 1" class=" object-cover w-full h-full" />
    // </div>

        <div className="display-block  w-4/5 h-[65vh] mx-auto mb-20 relative overflow-hidden">
        <Slider {...settings}>

          {imageArray.map((image, index) => (
            <div key={index} className="relative h-[65vh]">
              <div className="absolute inset-0">
                <img
                  className=" flex h-full w-full object-cover"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
  );
}
