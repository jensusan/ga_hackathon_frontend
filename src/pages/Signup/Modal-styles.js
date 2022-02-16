import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 30vh;
    left: 35%;
    width: 30%;
    height: 50vh;
    background-color: #FDF5FB;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;

`;