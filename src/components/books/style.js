import styled, { css } from 'styled-components';

import { theme, device } from '../../theme';

const { colors:{ black70 }, shadow } = theme;

const styledBookItemContentTile = css`
    grid-template: 242px 56px 54px 54px 40px / 174px;
    padding: 8px 8px 16px 8px;
    align-items: start;
    grid-template-areas:
    'img'
    'rating'
    'name'
    'author'
    'booking';
    @media ${device.mobileM} {
        grid-template: 242px 56px 54px 54px 40px / 256px;
        grid-template-areas:
        'img'
        'rating'
        'name'
        'author'
        'booking';
    }
`;

const styledBookItemContentList = css`
    width: 100%;
    grid-template: 64px 66px 40px / 120px 1fr 1fr 174px;
    grid-column-gap: 16px;
    padding: 24px 24px 24px 16px;
    grid-template-areas:
    'img name name name'
    'img author author author'
    'img rating . booking';
    @media ${device.tablet} {
        width: 640px;
    }
    @media ${device.mobileL} {
        padding: 16px 8px 16px 8px;
        width: 404px;
        grid-template: 21px 21px 37px 40px / 85px 250px;
        grid-column-gap: 12px;
        grid-template-areas:
        'img name'
        'img author'
        'img rating'
        'img booking';
    }
    @media ${device.mobileM} {
        width: 288px;
        grid-template: 21px 21px 37px 40px / 70px 186px;
        grid-column-gap: 8px;
        grid-template-areas:
        'img name'
        'img author'
        'img rating'
        'img booking';
    }
`;

const styledBookNameTile = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    width: 174px;
    height: 54px;
    font-weight: 600;
    overflow: hidden;
    @media ${device.mobileM} {
        width: 256px;
    }
`;

const styledBookNameList = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    overflow: hidden;
    @media ${device.tablet} {
        font-size: 18px;
        line-height: 18px;
    }
    @media ${device.mobileL} {
        font-size: 14px;
        -webkit-line-clamp: 2;
    }
`;

const styledBookAuthorTile = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;  
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
`;

const styledBookAuthorList = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;  
    -webkit-line-clamp: 1;
    white-space: pre-wrap;
    overflow: hidden;
    font-size: 16px;
    @media ${device.tablet} {
        font-size: 14px;
    }
`;

export const SBooksContainerGrid = styled.ul`
    display: grid;
    justify-content: center;
    grid-template: ${({formatTile}) => formatTile ? '470px 470px 470px / 190px 190px 190px 190px' : 'repeat(10, 1fr) / 100%'};
    gap: 24px;
    @media ${device.laptop} {
        gap: 21px;
    }
    @media ${device.tablet} {
        max-width: 825px;
        grid-template: ${({formatTile}) => formatTile ? '470px 470px 470px / 190px 190px 190px' : 'repeat(10, 1fr) / 100%'};
        gap: 35px;
    }
    @media ${device.mobileL} {
        grid-template: ${({formatTile}) => formatTile ? 'repeat(5, 470px) / 190px 190px' : 'repeat(10, 1fr) / 100%'};
        gap: 24px;
    }
    @media ${device.mobileM} {
        grid-template: ${({formatTile}) => formatTile ? 'repeat(10, 470px) / 100%' : 'repeat(10, 1fr) / 100%'};
    }
`;

export const SBookItem = styled.li`
    box-shadow: ${shadow};
    border-radius: 10px;
`;

export const SBookItemContent = styled.div`
    display: grid;
    justify-content: center;
    ${({formatTile}) => formatTile ? styledBookItemContentTile : styledBookItemContentList};
`;

export const SImg = styled.img`
    grid-area: img;
    max-height: 100%;
    margin: auto auto;
`;

export const SBookName = styled.span`
    grid-area: name;
    ${({formatTile}) => formatTile ? styledBookNameTile : styledBookNameList};
`;

export const SBookAuthor = styled.span`
    grid-area: author;
    margin-top: 8px;
    color: ${black70};
    ${({formatTile}) => formatTile ? styledBookAuthorTile : styledBookAuthorList};
    @media ${device.mobileL} {
        font-size: 12px;
    }
`;