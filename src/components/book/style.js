import styled from 'styled-components';

import { theme, device } from '../../theme';

const { colors:{ black5, black10, black40, black70, white, pressed, hover }} = theme;

export const SBookListNavigate = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 24px;
    left: 0;
    width: 99vw;
    height: 92px;
    background: ${black5};
    @media ${device.tablet} {
        width: 768px;
    }
    @media ${device.mobileL} {
        width: 425px;
        padding: 20px 16px 20px 16px;
    }
    @media ${device.mobileM} {
        width: 375px;
    }
    @media ${device.mobileS} {
        width: 320px;
    }
`;

export const SUl = styled.ul`
    display: inline flex;
    width: 1110px;
    @media ${device.tablet} {
        width: 640px;
    }
`;

export const SLiCategory = styled.li`
    line-height: 18px;
    display: flex;
    align-items: center;
`;

export const SBookContainerFlex = styled.section`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const SBookContainerGrid = styled.div`
    margin-top: 148px;
    display: grid;
    grid-template: 160px 24px 28px 32px 52px 62px 44px 16px 192px 86px / 445px 635px;
    grid-column-gap: 30px;
    grid-template-areas:
    'slider name'
    'slider .'
    'slider author'
    'slider .'
    'slider booking'
    'slider .'
    'slider h3'
    'slider .'
    'slider p'
    'slider p';
    @media ${device.tablet} {
        grid-template: 152px 50px 52px 48px 56px 240px / 136px 474px;
        grid-column-gap: 30px;
        grid-template-areas:
        'slider name'
        'slider author'
        'slider booking'
        'slider .'
        'h3 h3'
        'p p';
    }
    @media ${device.mobileL} {
        grid-template: 300px 16px 120px 60px 40px 42px 36px 16px 234px / 288px;
        grid-column-gap: 0;
        grid-template-areas:
        'slider'
        '.'
        'name'
        'author'
        'booking'
        '.'
        'h3'
        '.'
        'p';
    }
`;

export const SH2 = styled.h2`
    grid-area: name;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    @media ${device.tablet} {
        font-size: 24px;
        line-height: 30px;
    }
    @media ${device.mobileL} {
        font-size: 18px;
        line-height: 28px;
    }
`;

export const SAuthor = styled.span`
    grid-area: author;
    font-weight: 700;
    font-size: 18px;
    color: ${black40};
    @media ${device.tablet} {
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
    }
`;

export const SH3 = styled.h3`
    position: relative;
    max-width: 350px;
    height: 44px;
    grid-area: h3;
    font-weight: 700;
    font-size: 18px;
    border-bottom: 1px solid ${black10};
    @media ${device.tablet} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const SP = styled.p`
    grid-area: p;
    font-size: 16px;
    line-height: 24px;
    @media ${device.mobileL} {
        font-size: 12px;
        line-height: 18px;
    }
`;

export const SInfoContainerFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 62px;
`;

export const SRatingContainerGrid = styled.div`
    display: grid;
    grid-template: 44px 16px 28px / 125px 24px 125px;
    grid-template-areas:
    'h3 h3 h3'
    '. . .'
    'rating . ratingNum';
`;

export const SRatindNum = styled.span`
    grid-area: ratingNum;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
`;

export const SInfoContainerGrid = styled.dl`
    display: grid;
    grid-template: 44px 24px 24px 24px 24px 24px / 190px 160px 125px 190px 445px;
    grid-row-gap: 16px;
    grid-template-areas:
    'h3 h3 . . .'
    'publishingHouse publishingHouseDD . genre genreDD'
    'year yearDD . wt wtDD'
    'pages pagesDD . isbn isbnDD'
    'binding bindingDD . manufacturer manufacturerDD'
    'format formatDD . manufacturer manufacturerDD';
    @media ${device.tablet} {
        grid-template: 40px 18px 18px 18px 18px 80px / 151px 153px 30px 151px 153px;
        grid-row-gap: 16px;
        grid-template-areas:
        'h3 h3 . . .'
        'publishingHouse publishingHouseDD . genre genreDD'
        'year yearDD . wt wtDD'
        'pages pagesDD . isbn isbnDD'
        'binding bindingDD . manufacturer manufacturerDD'
        'format formatDD . manufacturer manufacturerDD';
    }
    @media ${device.mobileL} {
        grid-template: 40px repeat(8, 18px) 80px / 144px 144px;
        grid-row-gap: 16px;
        grid-template-areas:
        'h3 h3'
        'publishingHouse publishingHouseDD'
        'year yearDD'
        'pages pagesDD'
        'binding bindingDD'
        'format formatDD'
        'genre genreDD'
        'wt wtDD'
        'isbn isbnDD'
        'manufacturer manufacturerDD'
    }
`;

export const SDt = styled.dt`
    grid-area: ${({gridAria}) => gridAria};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${black40};
    @media ${device.tablet} {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const SDd = styled.dd`
    grid-area: ${({gridAria}) => gridAria};
    font-size: 16px;
    line-height: 24px;
    @media ${device.tablet} {
        font-size: 14px;
        line-height: 18px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
`;

export const SCommentsConteinerFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media ${device.tablet} {
        max-width: 640px;
    }
    @media ${device.mobileL} {
        max-width: 288px;
    }
`;

export const SCommentsFlex = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const SCommentFlex = styled.li`
    max-width: 730px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SNameFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;
    > * {
        font-size: 16px;
        line-height: 24px;
        color: ${black70}
    }
    @media ${device.mobileL} {
        display: grid;
        grid-template: 25px 25px / 32px 18px 238px;
        grid-template-areas:
        'userAvatar . userName'
        'userAvatar . userCommentDate';
        font-size: 15px;
        line-height: 20px;
        gap: 2px;
    }
`;

export const SUserAvatar = styled.img`
    grid-area: userAvatar;
`;

export const SUserName = styled.span`
    grid-area: userName;
`;

export const SUserCommentDate = styled.span`
    grid-area: userCommentDate;
`;


export const SBlockquote = styled.blockquote`
    font-size: 16px;
    line-height: 24px;
    @media ${device.mobileL} {
        font-size: 15px;
        line-height: 20px;
    }
`;

export const SButtonLeaveAComment = styled.button`
    width: 350px;
    height: 52px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 30px;
    &:hover {
        background: ${pressed};
    }
    color: ${white};
    background: ${hover};
    @media ${device.mobileL} { 
        width: 288px;
        height: 40px;
        font-size: 12px;
    }
`;

export const SAmountComments = styled.span`
    margin-left: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${black40};
`;

export const SCheckMark = styled.img`
    transform: ${({active}) => !active ? 'scaleY(-1)' : null};
    transition: transform .25s ease;
`;

export const SBtn = styled.button`
    position: absolute;
    left: 116px;
    top: 0;
`;