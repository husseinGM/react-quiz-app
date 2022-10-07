import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BgImage from "../images/bb.png";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url(${BgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing: border-box;
}


`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        color: #fff;
    }
   .score{
        color: #fff;
        margin: 0;
        font-size: 2rem;
    }
    .score-number{
        color: #51d051;
        font-weight: bold;
    }
    h1{
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
        font-weight: 400;
    }
    .start, .next{
        cursor: pointer;
        background-image: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .start{
        max-width: 200px;
    }
    .time{
        color: #fff;
    }
    .counter{
        color: red;
        font-size: 1.2rem;
        font-weight: 500;
    }
`;
