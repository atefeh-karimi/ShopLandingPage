import React, { useRef } from "react";
import Slider from "react-slick";
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { content } from "../Content";
import SetCard from "./SetCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MultipleSliders = ({ title, id }) => {
  const sliderRef = useRef();
  console.log(sliderRef.current);

  const theme = {
    width: "313px",
    height: "313px",
    Titlecolor: "black",
    marginTitle: "100%",
  };

  const settings = {
    className: "center",
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    rtl: true,
  };
  const leftBtn = {
    backgroundColor: "transparent",
    border: "none",
    color: "gray",
    cursor: "pointer",
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "6rem 0" }}>
        <div className="text-center d-flex justify-content-around align-items-center ">
          <div>
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
          <div>
            <h2 className="mb-3"> {title}</h2>
          </div>
          <button style={leftBtn}>
            {" "}
            مشاهده همه
            <FaChevronLeft style={{ marginRight: "8px" }} />{" "}
          </button>
        </div>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {content.map((c, index) => {
              return (
                <SetCard
                  key={index}
                  url={c.img}
                  title={c.title}
                  newPrice={c.newPrice}
                  oldPrice={c.oldPrice}
                  fw="bold"
                  fs="15px"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MultipleSliders;
