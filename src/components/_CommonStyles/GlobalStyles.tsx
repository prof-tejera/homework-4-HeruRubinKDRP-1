import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  #storybook-root{
    min-height: 100vh;
    min-width: 100vw;
  }
  
  body, #__next {
    margin: 0 !important;
    padding: 0 !important;
    font-family: sans-serif;
    height: 100vh;
  } 
 
  *{
    font-family: 'Kanit', sans-serif;
    user-select: none;
    box-sizing: border-box;
  }
  

  :root {  
    --step--6: clamp(0.30rem, calc(0.16rem + 0.8vw), 0.75rem);
    --step--5: clamp(0.40rem, calc(0.20rem + 1.01vw), 0.98rem);
    --step--4: clamp(0.48rem, calc(0.22rem + 1.30vw), 1.23rem);
    --step--3: clamp(0.58rem, calc(0.25rem + 1.67vw), 1.54rem);
    --step--2: clamp(0.69rem, calc(0.27rem + 2.13vw), 1.92rem);
    --step--1: clamp(0.83rem, calc(0.29rem + 2.73vw), 2.40rem);
    --step-0: clamp(1.00rem, calc(0.30rem + 3.48vw), 3.00rem);
    --step-1: clamp(1.20rem, calc(0.31rem + 4.43vw), 3.75rem);
    --step-2: clamp(1.44rem, calc(0.31rem + 5.65vw), 4.69rem);
    --step-3: clamp(1.73rem, calc(0.29rem + 7.18vw), 5.86rem);
    --step-4: clamp(2.07rem, calc(0.25rem + 9.13vw), 7.32rem);
    --step-5: clamp(2.49rem, calc(0.17rem + 11.59vw), 9.15rem); 
     
  }

`;

export default GlobalStyle;
