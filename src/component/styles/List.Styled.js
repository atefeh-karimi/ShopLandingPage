import styled from "styled-components";

export const ListItemStyled = styled.li`
  a {
    font-size: 14px;
    &:hover {
      color: #db9989;
    }
  }
  a::before {
    content: "•";
    color: #db9989;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: -1em;
  }
`;
