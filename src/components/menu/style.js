import styled, { css } from 'styled-components';

import { theme, device } from '../../theme';

const {colors: { hover, black40, black5 }, shadow} = theme;

const webkitBackground = css`
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const STabs = styled.nav`
    display: ${({displayNone}) => displayNone ? 'none' : 'block'};
    margin-top: 32px;
    width: 279px;
    z-index: 10;
    > * {
        width: 279px;
        > * {
            &:nth-child(n+2) {
                margin-top: 16px;
            }
        }
    }
    @media ${device.laptopM} {
        display: flex;
        flex-direction: column;
        position: fixed;
        padding: 116px 202px 116px 64px;
        width: 100vw;
        height: 100vh;
        left: ${({active}) => active ? '0' : '-120%'};
        top: 0;
        margin-top: 0;
        transition: 200ms ease-in-out;
    }
    @media ${device.mobileL} {
        padding: 116px 10px 23px 10px;
    }
    
`;

export const SUlMenu = styled.ul`
    width: 100%;
    @media ${device.laptopM} {
        border: 32px solid ${black5};
        background: ${black5};
        border-radius: 10px;
        overflow-y: scroll;
        overflow-x: hidden;
        box-shadow: ${shadow};
    }
    @media ${device.mobileL} {
        border-left: 16px solid ${black5};
        border-right: 16px solid ${black5};
    }
    
`;

export const SBtn = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`;

export const STabItem = styled.li`
    position: relative;
    height: 36px;
    width: 255px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
`;

const activeLinkStyle = {
    background: hover,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color:' transparent'
}

export const activeLinkMenuStyle = {
    ...activeLinkStyle,
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    borderImageSource: hover,
    borderBottom: '1px solid',
    borderImageSlice: '1',
    borderWidth: '2px'
};

export const linkMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
};

export const activeLinkCategoryStyle = {
    ...activeLinkStyle,
    display: 'block',
    width: '255px',
    fontWeight: '700',
    transform: 'translateX(-4px)'
};

export const LinkCategoryStyle = {
    display: 'block',
    width: '255px'
}

export const SUl = styled.ul`
    margin: 16px 16px 0 0;
    padding-left: 20px;
    white-space: pre-line;
    display: ${({active}) => active ? 'block' : 'none'};
`;

export const SLi = styled.li`
    > * {
        display: block;
        margin-top: 16px;
        font-size: 16px;
        line-height: 24px;
        display: ${({active}) => active ? 'block' : 'none'};

        &:hover {
            background: ${hover};
            ${webkitBackground};
        }

        > * {
            display: inline-block;
            padding-left: 6px;
            font-size: 14px;
            -webkit-text-fill-color: ${black40};
            transform: translateY(-1px);
        }
    }
`;

export const SCheckMark = styled.img`
    transform: ${({active}) => !active ? 'scaleY(-1)' : null};
    transition: transform .25s ease;
`;