import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import Slider from "react-slick";
import Card from "./Card";
import { content } from "../Content";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Offers.css";

function Offers() {
  const sliderRef = useRef();
  console.log(sliderRef.current);

  const theme = {
    color: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
    fs: "15px",
    width: "420px",
    height: "460px",
    Titlecolor: "white",
    marginTitle: "80%",
  };

  const settings = {
    className: "center",
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    rtl: true,
  };

  return (
    <div style={{ margin: "6rem 0" }}>
      <div className="text-center">
        <h2>پیشنهادهای ویژه</h2>
        <p className="text-muted mb-3 fs-4">
          متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت کاران{" "}
        </p>
      </div>

      <div className="offerCards Offers">
        <ThemeProvider theme={theme}>
          <Slider ref={sliderRef} {...settings}>
            {content.map((c) => {
              return <Card key={c.id} {...c} />;
            })}
          </Slider>
        </ThemeProvider>
      </div>
      <div className="text-center d-flex justify-content-center align-items-center mt-5">
        <FaChevronRight
          onClick={() => sliderRef.current.slickNext()}
          size={20}
          style={{ color: "gray", cursor: "pointer" }}
        />
        <FaChevronLeft
          onClick={() => sliderRef.current.slickPrev()}
          size={20}
          style={{ marginRight: "8px", color: "gray", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Offers;
