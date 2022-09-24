import React from "react";
import Slider from "react-slick";
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { news as data } from "../Content";
import SetCard from "./SetCard";

function News() {
  const theme = {
    width: "424px",
    height: "272px",
    Titlecolor: "black",
    marginTitle: "100%",
  };
  const settings = {
    className: "center",
    arrows: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    rtl: true,
    currentSlide: 0,
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="mt-5 mb-5">
          <div className="text-center">
            <h2 className="mt-2"> اخبارومقالات</h2>
          </div>
          <div>
            <Slider {...settings}>
              {data.map((c) => {
                return (
                  <SetCard
                    key={c.id}
                    url={c.img}
                    title={c.title}
                    body={c.body}
                    type={c.type}
                    fw="bold"
                    fs="16px"
                    padding="0 24px"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default News;
