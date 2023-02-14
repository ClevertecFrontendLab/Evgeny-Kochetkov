import styled, { css } from 'styled-components';

import search from '../../assets/icons/icon-input-search.svg';
import filter from '../../assets/icons/icon-input-filter.svg';

import { theme, device } from '../../theme';

const {colors: {black40, dark, hover, white}, shadow} = theme;

export const SNavigationList = styled.form`
    position: relative;
    display: grid;
    align-items: center;
    grid-template: 1fr / 350px 150px 185px 38px 38px;
    grid-template-areas:
    'search text . tile list';
    gap: 16px;
    margin-top: 32px;
    
    > * {
        height: 38px;
        box-shadow: ${shadow};
        border-radius: 599px;
        @media ${device.mobileM} {
            height: 38px;
        }
    }
    @media ${device.tablet} {
        grid-template: 1fr / 274px 150px 76px 38px 38px;
        grid-template-areas:
        'search text . tile list';
    }
    @media ${device.mobileL} {
        margin-top: 0;
        display: ${({activeInputType}) => activeInputType ? 'flex' : 'grid'};
        grid-template: 1fr / 38px 38px 188px 38px 38px;
        grid-template-areas:
        'search text . tile list';
    }
    @media ${device.mobileM} {
        grid-template: 1fr / 38px 38px 96px 38px 38px;
        grid-template-areas:
        'search text . tile list';
    }
    @media ${device.mobileS} {
        grid-template: 1fr / 38px 38px 70px 38px 38px;
        grid-template-areas:
        'search text . tile list';
    }
`;

const styleInput = css`
    width: 100%;
    padding-left: 40px;
    color: ${dark};
    caret-color: #F83600;
    &::-moz-placeholder {
        color: ${black40};
    }
    &::-webkit-input-placeholder {
        color: ${black40};
    }
    &::-webkit-search-cancel-button {
        display: none;
    }
    &::-ms-clear {
        display: none;
        width : 0;
        height: 0;
    }
    @media ${device.mobileL} {
        padding-left: 38px;
    }
`;

export const SInputSearch = styled.input`
    ${styleInput}
    grid-area: 'search';
    background: url(${search}) no-repeat 16px center;
    @media ${device.mobileL} {
        display: ${({activeInputType}) => activeInputType === 'search' ? 'block' : 'none'};
        background: url(${search}) no-repeat 12px center;
    }
`;

export const SInputText = styled.input`
    ${styleInput}
    grid-area: 'text';
    background: url(${filter}) no-repeat 16px center;
    @media ${device.mobileL} {
        display: ${({activeInputType}) => activeInputType === 'text' ? 'block' : 'none'};
        background: url(${filter}) no-repeat 12px center;
    }
`;

export const SBtn = styled.button`
    grid-area: ${({format}) => format};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({active}) => active ? hover : white};
    @media ${device.mobileL} {
        display: ${({activeInputType}) => activeInputType ? 'none' : 'flex'};
    }
`;

export const SBtnCloseInput = styled.button`
    display: none;
    position: absolute;
    box-shadow: none;
    @media ${device.mobileL} {
        display: ${({activeInputType}) => activeInputType ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        width: 38px;
        right: 0;
    }
`;

export const SBtnInput = styled.button`
    display: none;
    @media ${device.mobileL} {
        display: ${({activeInputType}) => activeInputType === null ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
    }
`;