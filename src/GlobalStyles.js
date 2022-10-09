import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  list-style: none;
  box-sizing: border-box;
}


  body {
  font-family: 'iransansRegular';
  line-height: 1.7;
  direction: rtl;
}
a {
  text-decoration: none;
   color: var(--color-white);
}


.cursor-pointer{
  cursor: pointer;

}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.2;
}

h1 {
  font-size: 38px;
    font-family: "iransansBold";
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 26px;
}
h4 {
  font-size: 21px;
}
img {
  width: 100%;
  display: block;
  object-fit: cover;
}
`;
