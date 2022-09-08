import { createGlobalStyle } from "styled-components";
import IrenSansBold from "./font/woff/IRANSansX-Bold.woff";
import IrenSansDemiBold from "./font/woff/IRANSansX-DemiBold.woff";
import IrenSansMedium from "./font/woff/IRANSansX-Medium.woff";
import IrenSansRegular from "./font/woff/IRANSansX-Regular.woff";
import IrenSansLight from "./font/woff/IRANSansX-Light.woff";
import IrenSansThin from "./font/woff/IRANSansX-Thin.woff";

const FontStyles = createGlobalStyle`

 @font-face {
  font-family: 'iransansBold';
  src: url(${IrenSansBold}) format("woff");
}  

@font-face {
  font-family: 'IrenSansDemiBold';
  src:url(${IrenSansDemiBold}) format("woff");
}

@font-face {
   font-family: 'IrenSansMedium';
  src:url(${IrenSansMedium}) format("woff");
}

 @font-face {
  font-family: 'iransansRegular';
  src: url(${IrenSansRegular}) format("woff");
}

@font-face {
   font-family: 'IrenSansLight';
  src:url(${IrenSansLight}) format("woff");
}

@font-face {
 font-family: 'IrenSansThin';
  src:url(${IrenSansThin}) format("woff");
}

`;

export default FontStyles;
