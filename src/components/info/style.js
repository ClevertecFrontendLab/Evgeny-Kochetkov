import styled from 'styled-components';

import { device } from '../../theme';

export const SUl = styled.ul`
    list-style-type: none;
    @media ${device.tablet} {
        max-width: 640px;
    }
    @media ${device.mobileL} {
        width: 405px;
    }
    @media ${device.mobileM} {
        width: 312px;
    }
    @media ${device.mobileS} {
        width: 288px;
    }
    > * {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        &:nth-child(n+2) {
            margin-top: 16px;
        }
    }
    > * {
        > * {
            margin-left: 30px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            @media ${device.mobileL} {
                font-size: 15px;
                line-height: 20px;
            }
        }
    }
    > * {
        > * {
            > * {
            margin-left: 60px;
        }
        }
    }
`;