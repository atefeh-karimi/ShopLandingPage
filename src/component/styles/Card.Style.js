import styled from "styled-components";

export const CardStyled = styled.div`
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  margin-top: 12px;
`;
export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
`;

export const CardOverley = styled.div`
  position: absolute;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.color};
  z-index: 2;
`;

export const CardTitle = styled.p`
  font-size: ${(props) => props.theme.fs};
  text-align: center;
  margin-top: ${(props) => props.theme.marginTitle};
  font-weight: bold;
  color: ${(props) => props.theme.Titlecolor};
`;
