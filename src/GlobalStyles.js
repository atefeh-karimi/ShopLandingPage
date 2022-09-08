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

:root {
  --color-primary: #6c63ff;
  --color-success: #00bf8e;
  --color-warning: #f7c94b;
  --color-danger: #f75842;
  --color-danger-variant: rgba(247, 88, 66, 0.4);
  --color-white: #fff;
  --color-light: rgba(255, 255, 255, 07);
  --color-black: #000;
  --color-bg: #1f2641;
  --color-bg1: #2e3267;
  --color-bg2: #424890;

  --container-width-lg: 80%;
  --container-width-md: 90%;
  --container-width-sm: 94%;

  --transition: all 400ms ease;
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



.container {
  width: var(--container-width-lg);
  margin: 0 auto;
  font-family: 'IrenSansRegular';
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


/* =====================MEDIA QUERIES(TABLET)==================== */
@media screen and (max-width: 1024px) {
  .container {
    width: var(--container-width-md);
  }
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 27px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 19px;
  }}

/* =====================MEDIA QUERIES(PHONE)==================== */
@media screen and (max-width: 600px) {
  .container {
    width: var(--container-width-sm);
  }

  }

`;
