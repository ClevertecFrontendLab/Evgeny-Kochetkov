import styled from 'styled-components';

import { device } from '../../theme';

export const SSliderWrapper = styled.div`
    grid-area: 'slider';
    @media ${device.tablet} {
        width: 137px;
    }
    @media ${device.mobileL} {
        width: 100%;
        /* margin-left: 50px; */
    }
`;

export const SImg = styled.img`
    display: block;
    margin: 0 auto;
    @media ${device.mobileL} {
        height: 260px;
        width: 188px;
    }
`;