import styled from 'styled-components';

import { theme, device } from '../../theme';

const {colors: {black20}} = theme;

export const SFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 62px;
    padding: 16px 0;
    border-top: ${`${black20} 1px solid`};
    border-width: 2px;
    @media ${device.tablet} {
        max-width: 640px;
    }
    @media ${device.mobileL} {
        align-items: center;
        flex-direction: column;
        max-width: 415px;
        gap: 16px;
    }
    @media ${device.mobileM} {
        max-width: 312px;
    }
    @media ${device.mobileS} {
        max-width: 288px;
    }
`;

export const SCopyright = styled.span`
    display: inline-block;
    font-size: 16px;
    @media ${device.mobileL} {
        font-size: 15px;
        text-align: center;
    }
`;

export const SUlSocialLinks = styled.ul`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 24px;
`;