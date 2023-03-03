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
`;

export const BoxTwo = styled.section`
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    input {
        width: 50%;
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
        color: #fff;
        z-index: 0;
    }

    input::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.375rem;
        letter-spacing: 0em;
        color: #fff;
    }

    #Lupa {
        width: 1.5rem;
        position: relative;
        left: 2%;
        cursor: pointer;
        z-index: 1;
    }
`;