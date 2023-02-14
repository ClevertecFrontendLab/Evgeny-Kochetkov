import styled, { css } from 'styled-components';

import { theme, device } from '../../theme';

const {shadow, colors: { dark }} = theme;

export const SHeader = styled.header`
    height: 94px;
    margin-top: 32px;
    display: grid;
    align-items: center;
    grid-template: 1fr / 1fr 3fr;
    @media ${device.laptopM} {
        display: flex;
    }
    @media ${device.laptopL} {
        margin-top: 24px;
    }
`;

export const SLogo = styled.img`
    display: block;
    @media ${device.laptopM} {
        display: none;
    }
`;

export const SFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

const activeHamburger = css`
    &:nth-child(1) {
        transform: translateY(8.75px) rotate(45deg);
    }
    &:nth-child(2) {
        display: none;
    }
    &:nth-child(3) {
        transform: rotate(-45deg);
    }
`;

export const SHamburger = styled.button`
    display: none;
    transition: transform .25s ease;
    z-index: 12;
    @media ${device.laptopM} {
        display: grid;
        grid-template: 1fr 1fr 1fr / 1fr;
        justify-items: center;
        align-items: center;
        height: 27px;
        width: 27px;
        > * {
            width: 27px;
            height: 3px;
            border-radius: 3px;
            background: ${dark};
            ${({active}) => active ? activeHamburger : null}
            transition: transform .25s ease;
        }
    }
`;

export const STitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    @media ${device.laptopM} {
        margin-left: 24px;
    }
    @media ${device.mobileS} {
        font-size: 24px;
    }
`;

export const SPersonLink = styled.a`
    display: flex;
    justify-content: end;
    align-items: center;
    @media ${device.laptopM} {
        display: none;
    }
`;

export const SUserName = styled.span`
    margin-right: 16px; 
    font-size: 14px;
    font-weight: 600;
`;

export const SAvatar = styled.img`
    filter: ${shadow};
`;