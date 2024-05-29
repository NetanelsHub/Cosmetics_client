import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const url = "http://localhost:3000/products/getAllProducts";


export default function Carousel() {
    // i need the api for discount for now iam will use a hear line category
    const [discountProducts, setDiscountProducts] = useState(null)

    async function getProductByDiscount() {
        try {
            const { data } = await axios.get(url, {
                withCredentials: true,
            })

            if (!data) throw new Error("There is not Products");
            console.log("data ?:", data.products)

            setDiscountProducts(data.products)

            // console.log(productsByCategory);
            // console.log(data)
        }
        catch (error) { }
    }

    useEffect(() => {
        getProductByDiscount();
        console.log("from effect :", discountProducts)
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };



    return (
        <div className="w-4/5 h-[35vh] mx-auto">
      <h2 className="text-center mb-4">Sell 20% Discount Products</h2>
      <Slider {...settings}>
        {discountProducts?.map((product, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center w-full h-40">
              <img
                className="w-40 h-40 object-contain"
                src={product.product_image}
                alt={product.product_name}
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-customGold">{product.product_name}</h3>
            <p className="text-center text-gray-600">{product.product_price}$</p>
          </div>
        ))}
      </Slider>
    </div>
    )
}

// npm install react-slick slick-carousel
{/* {products.map(product => (
          <div key={product.id} className="flex flex-col items-center justify-center p-4">
            <img src={product.imageUrl} alt={product.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-center text-lg font-semibold">{product.title}</h3>
            <p className="text-center text-gray-600">{product.price}</p>
          </div>
        ))} */}