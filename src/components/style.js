import styled from "styled-components";

export const Heart = styled.section`
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: rgba(87, 74, 232, 0.0039215686);
    stroke: #e07b67;
    transition: fill 0.3s;
    cursor: pointer;
  }

  .icon:hover {
    fill: #e07b67;
  }

  .filled {
    fill: #e07b67;
    width: 1.5rem;
    height: 1.5rem;
    stroke: #e07b67;
    transition: fill 0.3s;
    cursor: pointer;
  }
`;
