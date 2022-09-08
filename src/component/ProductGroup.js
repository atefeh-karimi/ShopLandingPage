import React from "react";
import { ThemeProvider } from "styled-components";
import { content } from "../Content";
import Card from "./Card";

function ProductGroup() {
  const theme = {
    color: "linear-gradient(180deg, rgba(161,147,146,0) 50%, #a19392 100%)",
    fs: "14px",
    width: "202px",
    height: "202px",
    Titlecolor: "white",
    marginTitle: "50%",
  };
  return (
    <div style={{ margin: "5rem 0" }} className="text-center ">
      <h2>گروه محصولات </h2>
      <div className="d-flex justify-content-around mt-3 align-content-end flex-wrap">
        <ThemeProvider theme={theme}>
          {content.map((c) => {
            return <Card key={c.id} title={c.title} url={c.img} />;
          })}
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ProductGroup;
