import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoNike from "../../assets/Logo_NIKE.svg.png";
import LogoAdidas from "../../assets/Adidas_Logo.svg.png";
import LogoNewBablance from "../../assets/png-transparent-new-balance-branson-sneakers-shoe-clothing-rock-cliff-text-trademark-logo.png";
import logoAsics from "../../assets/asics-logo-png-transparent.png";

SliderAuto.propTypes = {};

function SliderAuto(props) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <section className="my-10">
      <div className="text-center">
        <p className="text-4xl font-bold py-1 pb-6">Our customer</p>
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="cursor-pointer">
              <img
                src={LogoNike}
                alt="img-logo"
                className="h-24 w-24 object-contain	mx-auto"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={LogoAdidas}
                alt="img-logo"
                className="h-24 w-24 object-contain	mx-auto"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={LogoNewBablance}
                alt="img-logo"
                className="h-24 w-24 object-contain	mx-auto"
              />
            </div>
            <div className="text-3xl cursor-pointer">
              <img
                src={logoAsics}
                alt="img-logo"
                className="h-24 w-24 object-contain	mx-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SliderAuto;
