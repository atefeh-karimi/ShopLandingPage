import React from "react";
import _ from "underscore";

function Ads({ num }) {
  var arr = _.range(num);
  const cardAdsStyle = {
    height: "200px",
    width: num === 1 ? "48%" : "98%",
    margin: "10px 8px",
    textAlign: "center",
    borderRadius: "24px",
    background: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="d-flex justify-content-around">
      {arr.map((c, index) => {
        return (
          <div key={index} style={cardAdsStyle}>
            بنر تبلیغاتی
          </div>
        );
      })}
    </div>
  );
}
export default Ads;
