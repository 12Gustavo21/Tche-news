import styled from "styled-components";

export const Header = styled.header`
  background: #17171a;
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
  justify-content: center;
  align-items: center;

  h1 {
    font: 500 2.5rem/1.875rem "Space Grotesk", sans-serif;
    color: #fff;

    span {
      color: #e07b67;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const BoxTwo = styled.section`
  width: 76vw;
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
    font: 500 1rem/1.375rem "Inter", sans-serif;
    color: #ffffff;
    z-index: 0;
  }

  input::placeholder {
    font: 500 1rem/1.375rem "Inter", sans-serif;
    color: #afabb6;
  }

  #magnifyingGlass {
    width: 1.5rem;
    position: relative;
    left: 1rem;
    cursor: pointer;
    z-index: 1;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #121214;
  padding: 4rem 0 4rem 0;
`;

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  .active {
    border-color: #E07B67;
    transition: all 0.3s ease-in-out;
  }
`;

export const NewsContainer = styled.section`
  width: 76vw;
  height: 13%;
  border-radius: 0.5rem;
  background: #17171a;
  padding: 1rem;
  border: 0.125rem solid #17171a;

  @media only screen and (max-width: 768px) {
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
    font: 500 1.5rem/1.875rem "Space Grotesk", sans-serif;
    color: #e07b67;
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
    font: 400 1.625rem/2.0625rem "Space Grotesk", sans-serif;
    color: #ffffff;
    padding-bottom: 0.7rem;
  }

  p {
    font: 400 1.125rem/2rem "Space Grotesk", sans-serif;
    color: #afabb6;
    text-align: left;
    word-wrap: break-word;
  }
`;

export const ErrorContainer = styled.section`
  width: 57%;
  height: 13%;
  background-color: #17171a;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font: 400 2rem/2rem "Space Grotesk", sans-serif;
    color: #FFF;
    word-wrap: break-word;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #17171a;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;

  p,
  a {
    font: 400 1.5rem/1.5rem "Space Grotesk", sans-serif;
    color: #f3f5f7;
    text-decoration: none;
    position: absolute;
  }

  a::after {
    position: relative;
    display: block;
    content: "";
    border-bottom: #f3f5f7 0.125rem solid;
    border-radius: 0.125rem;
    transform: scaleX(0.1);
    transform-origin: center;
    transition: transform 300ms ease-in-out;
  }

  a:hover::after {
    transform: scaleX(1);
  }

  @media only screen and (max-width: 345px) {
    p,
    a {
      font-size: 1.3rem;
    }
  }
`;