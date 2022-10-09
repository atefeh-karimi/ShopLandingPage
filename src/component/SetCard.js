import { CardImage, CardStyled } from "./styles/Card.Style";
import React from "react";

function SetCard({
  img,
  title,
  newPrice,
  oldPrice,
  body,
  fw,
  fs,
  padding,
  type,
}) {
  const titleStyle = {
    fontWeight: fw,
    fontSize: fs,
    padding: padding,
    marginTop: "15px",
  };
  return (
    <div className="d-flex flex-column align-items-center cursor-pointer">
      <CardStyled>
        <CardImage>
          {" "}
          <img src={img} alt="" />
        </CardImage>
      </CardStyled>
      <p style={titleStyle}>{title}</p>
      {newPrice ? (
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
          className="px-5 mt-2  d-flex justify-content-between align-items-center"
        >
          <span className="text-decoration-line-through me-5 text-muted">
            {oldPrice}
          </span>
          <span>{newPrice}</span>
        </div>
      ) : (
        <div className="p-4 fs-9">
          <p>{body}</p>
          <span className="text-muted">{type}</span>
        </div>
      )}
    </div>
  );
}

export default SetCard;
