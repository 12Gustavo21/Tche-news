import React, { useState } from "react";
import styled from "styled-components";

const Heart = () => {

    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        setIsFilled(!isFilled);
    };

    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon) => {
        icon.onclick = () => {
            icon.classList.toggle("filled");
        };
    });

    const Heart = styled.section`
        .icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: rgba(87, 74, 232, 0.0039215686);
            stroke: #574AE8;
            transition: fill 0.3s;
            cursor: pointer;
        }

        .icon:hover {
            fill: #574AE8;
        }

        .filled {
            fill: #574AE8;
            width: 1.5rem;
            height: 1.5rem;
            stroke: #574AE8;
            transition: fill 0.3s;
            cursor: pointer;
        }
    `;

    return (
        <Heart onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#574AE8" className={isFilled ? 'filled' : 'icon'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

        </Heart>
    );
};

export default Heart;