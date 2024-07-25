import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="p-5">
        <Slider {...settings}>
          <div>
            <img src="/sliders/bn1.jpg" className="h-40 w-full px-2" />
          </div>
          <div>
            <img src="/sliders/bn2.jpg" className="h-40 w-full px-2" />
          </div>
          <div>
            <img src="/sliders/bn3.jpg" className="h-40 w-full px-2" />
          </div>
          <div>
            <img src="/sliders/bn4.jpg" className="h-40 w-full px-2" />
          </div>
          <div>
            <img src="/sliders/bn5.jpg" className="h-40 w-full px-2" />
          </div>
          <div>
            <img src="/sliders/bn6.jpg" className="h-40 w-full px-2" />
          </div>
        </Slider>
      </div>
      <div className="p-5">
        <Slider {...settings}>

        </Slider>
      </div>
    </>
  );
};

export default Carousel;
