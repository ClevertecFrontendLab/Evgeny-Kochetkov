import styled from 'styled-components';

import activeStar from '../../assets/icons/star-active.svg';
import star from '../../assets/icons/star.svg'

import { theme, device } from '../../theme';

const { colors:{ black40 }} = theme;

export const SRating = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    grid-area: rating;
`;

export const SStar = styled.button`
    width: 20px;
    height: 20px;
    background: ${({active}) => active ? `url(${activeStar}) no-repeat center center` : `url(${star}) no-repeat center center`};
    @media ${device.mobileL} {
        width: 16px;
        height: 16px;
    }
`;

export const SNoRating = styled.span`
    color: ${black40};
    @media ${device.mobileL} {
        font-size: 12px;
    }
`;  