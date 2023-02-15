import styled from 'styled-components';

import { device } from '../theme';

export const SMainContainerGred = styled.section`
    display: ${({displayFlex}) => displayFlex ? 'flex' : 'grid'};
    justify-content: center;
    gap: 10px;
    grid-template: 1fr/ 1fr 3fr;
    @media ${device.laptopM} {
        display: flex;
    }
`;

export const SMainContainerFlex = styled.div`
    display: flex;
    max-width: ${({witdh100}) => witdh100 ? '100%' : '825px'};
    flex-direction: column;
    gap: 32px;
    padding: ${({padding}) => padding};
    @media ${device.mobileL} {
        min-width: 312px;
    }
    @media ${device.mobileS} {
        min-width: 286px;
    }
`;

export const SContent = styled.div`
    display: flex;
    justify-content: center;
`;