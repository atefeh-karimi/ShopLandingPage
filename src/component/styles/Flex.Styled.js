import styled from "styled-components";

export const FlexStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.JustifyContent};
`;
