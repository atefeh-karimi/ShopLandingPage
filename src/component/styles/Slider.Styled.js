import styled from "styled-components";

export const BgSlider = styled.div`
  height: 550px;
  background: url("./image/slide");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: url("../image/slide2") left 80px top -30px no-repeat,
      url("../image/slide3") right -100px top -100px no-repeat;
    background-size: 150px, auto;
  }
`;

export const SliderContainer = styled.div`
  height: 415px;
  width: 100%;
  background-image: linear-gradient(-88deg, #db9989 0%, #a19392 100%);
`;
