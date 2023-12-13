import { createGlobalStyle } from "styled-components";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${dancingScript.style.fontFamily};
    font-size: 25px; 
  }
`;
