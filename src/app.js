import React from "react";
import FontStyles from "./fontStyle";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Slider from "./component/Slider";
import Offers from "./component/Offers";
import ProductGroup from "./component/ProductGroup";
import Ads from "./component/Ads";
import News from "./component/News";
import Insta from "./component/Insta";
import Footer from "./component/Footer";
import MultipleSliders from "./component/MultipleSliders";

const theme = {
  color: "white",
};
function App() {
  return (
    <div>
      <FontStyles />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Nav />
        <Slider />
        <Offers />
        <ProductGroup />
        <Ads num="2" />
        <MultipleSliders title="ست سرویس بهداشتی" />
        <MultipleSliders title="عنوان دسته بندی" />
        <Ads num="3" />
        <MultipleSliders title="عنوان دسته بندی" />
        <MultipleSliders title="عنوان دسته بندی" />
        <Ads num="1" />

        <News />
        <Insta />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
