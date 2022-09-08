import React from "react";
import {
  CardStyled,
  CardImage,
  CardOverley,
  CardTitle,
} from "./styles/Card.Style";

function Card({ title, oldPrice, newPrice, url }) {
  return (
    <CardStyled>
      <CardImage>
        <img src={url} alt="" />
        <CardOverley>
          <CardTitle>{title}</CardTitle>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
            className="px-5  d-flex justify-content-between text-white"
          >
            <span className="text-decoration-line-through">{oldPrice}</span>
            <span>{newPrice}</span>
          </div>
        </CardOverley>
      </CardImage>
      {/* <span>22:54:00</span> */}
    </CardStyled>
  );
}

export default Card;
