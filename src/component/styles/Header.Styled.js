import styled from "styled-components";

export const HeaderStyled = styled.header`
  max-width: 100%;
  padding: 8px 0;
  /* background-color: green; */

  img {
    width: 80px;
  }

  input {
    width: 510px;
    border-radius: 50px;
    padding: 8px 15px;
    color: black;
    background-repeat: no-repeat;
    background-position: left center;
    background: #ededed
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;

    ::placeholder {
      color: black;
      font-size: 14px;
    }
  }
  label {
    margin-right: 5px;
  }
`;
