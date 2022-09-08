import styled from "styled-components";

export const SocialIconsStyled = styled.div`
  padding-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  li {
    margin-left: 16px;
    font-size: 32px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
`;
