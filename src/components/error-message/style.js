import styled from 'styled-components';

import { theme, device } from '../../theme';

const {colors: { negative, negativeBg }} = theme;

export const SErrorMessage = styled.div`
    display: ${({active}) => active ? 'flex' : 'none'};
    align-items: center;
    position: absolute;
    padding: 0 32px 0 32px;
    background: ${negativeBg};
    border: 1.5px solid ${negative};
    border-radius: 5px;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    width: 1110px;
    height: 80px;
    z-index: 20;
    @media ${device.tablet} {
        padding: 0 24px 0 24px;
        width: 768px;
    }
    @media ${device.mobileL} {
        padding: 12px 16px 12px 16px;
        align-items: start;
        width: 425px;
    }
    @media ${device.mobileM} {
        width: 375px;
    }
    @media ${device.mobileS} {
        width: 320px;
    }
`;

export const SStrong = styled.strong`
    width: 100%;
    margin-left: 24px;
    font-size: 16px;
    @media ${device.tablet} {
        font-size: 14px;
    }
`;