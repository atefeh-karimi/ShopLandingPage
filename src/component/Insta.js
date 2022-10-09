import React from "react";
import Slider from "react-slick";
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa";
import { content } from "../Content";
import SetCard from "./SetCard";

function Insta() {
  const theme = {
    width: "176px",
    height: "176px",
  };
  const settings = {
    className: "center",
    arrows: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    currentSlide: 0,
  };

  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <div className="mt-5 mb-5">
          <div className="text-center">
            <h3 className="mt-2">
              accessories_bath_sample_shop
              <FaInstagram size={50} className="me-2" />
            </h3>
            <p>اینستاگرام ما را دنبال کرده و به دوستان خود معرفی کنید</p>
          </div>
          <div>
            <Slider {...settings}>
              {content.map((c) => {
                return <SetCard key={c.id} img={c.img} />;
              })}
            </Slider>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Insta;
