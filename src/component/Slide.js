import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaDotCircle } from "react-icons/fa";

function Slide({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const LeftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, 50%)",
    left: "32px",
    color: "white",
    fontSize: "40px",
    zIndex: 1,
    cursor: "pointer",
  };

  const RightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, 50%)",
    right: "32px",
    color: "white",
    fontSize: "40px",
    zIndex: 1,
    cursor: "pointer",
  };

  const slideBody = {
    color: "white",
    fontSize: "24px",
    padding: "10% 15%",
    textAlign: "center",
  };

  const DotIcon = {
    position: "absolute",
    left: "50%",
    transform: "translate(50%, 0)",
    bottom: "20px",
    color: "white",
    fontSize: "12px",
    zIndex: 1,
    cursor: "pointer",
  };

  function goToNext() {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    console.log("newSlide", newSlide);
    return setCurrentSlide(newSlide);
  }

  function goToPrev() {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    return setCurrentSlide(newSlide);
  }

  function goToSlide(slideId) {
    return setCurrentSlide(slideId);
  }

  return (
    <>
      <div>
        <FaChevronRight style={RightArrowStyle} onClick={goToNext} />
        <FaChevronLeft style={LeftArrowStyle} onClick={goToPrev} />
        <p style={slideBody}>{slides[currentSlide].body}</p>
        <div style={DotIcon}>
          {slides.map((slide, slideId) => (
            <FaDotCircle
              className="me-2"
              key={slideId}
              onClick={() => goToSlide(slideId)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slide;
