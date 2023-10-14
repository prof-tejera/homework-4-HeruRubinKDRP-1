import styled from "styled-components";

export const CalculatorStyled = styled.div`
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
  padding: var(--step-0);
  * {
    font-family: 'Kanit', sans-serif;
    user-select: none;
    box-sizing: border-box;
  }
  

  .operations {
    width: 25%;
  }

  .number-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 75%;
    height: 100%;
    gap: 1px;
    border: 1px solid #ccc;
    background-color: #ccc;

    

    .zero {
      grid-row-start: 4;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .one {
      grid-row-start: 3;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 1;
    }

    .two {
      grid-row-start: 3;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 2;
    }

    .three {
      grid-row-start: 3;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 3;
    }

    .four {
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 1;
    }

    .five {
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 2;
    }

    .six {
      grid-row-start: 2;
      grid-row-end: 2;
      grid-column-start: 3;
      grid-column-end: 3;
    }

    .seven {
      grid-row-start: 1;
      grid-row-end: 1;
      grid-column-start: 1;
      grid-column-end: 1;
    }

    .eight {
      grid-row-start: 1;
      grid-row-end: 1;
      grid-column-start: 2;
      grid-column-end: 2;
    }

    .nine {
      grid-row-start: 1;
      grid-row-end: 1;
      grid-column-start: 3;
      grid-column-end: 3;
    }
  }

`;