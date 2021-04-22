import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
  
    #root {
        padding: 1rem;
    }

    .overlay {
        background: rgba(119, 119, 119, 0.75);
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
