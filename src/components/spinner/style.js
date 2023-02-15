import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`;

export const SSpinnerBg = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(54, 54, 54, 0.3);
    backdrop-filter: blur(10px);
    z-index: 15;
`;

export const SSpinner = styled.svg`
    animation: ${rotate} 2s linear infinite;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
`;