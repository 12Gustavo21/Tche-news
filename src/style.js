import styled from "styled-components";

export const Header = styled.header`
    background: linear-gradient(70deg, #574AE8, #3EA1DB 95%);
    width: 100%;
    min-height: 30vh;
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: normal;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`;

export const BoxOne = styled.section`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    h1,
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.875rem;
        letter-spacing: 0em;
        text-align: right;
        color: #fff;
    }

    @media only screen and (width <= 565px) {
        width: 80%;
    }
`;

export const BoxTwo = styled.section`
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    input {
        width: 100%;
        height: 3rem;
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.3125rem;
        border: none;
        outline: none;
        padding: 0 3.5rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.375rem;
        color: #FFFFFF;
        z-index: 0;
    }

    input::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.375rem;
        letter-spacing: 0em;
        color: #FFFFFF50;
    }

    #Lupa {
        width: 1.5rem;
        position: relative;
        left: 2%;
        cursor: pointer;
        z-index: 1;
    }

    @media only screen and (width <= 565px) {
        width: 80%;
    }
`;

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #F3F5F7;
    padding: 7rem 0 7rem 0;
`;

export const MainContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const NewsContainer = styled.section`
    width: 57%;
    height: 13%;
    background-color: #fff;
    padding: 1rem;

    @media only screen and (width <= 768px) {
        width: 85%;
    }
`;

export const Informations = styled.section`
    width: 100%;
    margin: 0.5rem 0 1.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: "Lexend Deca", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.375rem;
        color: #717171;
    }
`;

export const Description = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h3 {
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 1.625rem;
        line-height: 2.0625rem;
        color: #1A202C;
        letter-spacing: 0em;
        padding-bottom: 0.7rem;
    }
    
    p {
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 2rem;
        color: #717171;
        letter-spacing: 0em;
        text-align: left;
        word-wrap: break-word;
    }
`;

export const ErrorContainer = styled.section`
    width: 57%;
    height: 13%;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h4 {
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2rem;
        color: #717171;
        letter-spacing: 0em;
        word-wrap: break-word;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #574AE8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;

    p, a {
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: #F3F5F7;
        text-decoration: none;
        position: absolute;
    }

    a::after {
        position: relative;
        display: block;
        content: "";
        border-bottom: #F3F5F7 0.125rem solid;
        border-radius: 0.125rem;
        transform: scaleX(0.1);
        transform-origin: center;
        transition: transform 300ms ease-in-out;
    }

    a:hover::after {
        transform: scaleX(1);
    }

    @media only screen and (320px <= width <= 345px) {
        p, a {
            font-size: 1.3rem;
        }
    }
`;