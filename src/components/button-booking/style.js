import styled from 'styled-components';

import { theme, device } from '../../theme';

const { colors:{ hover, pressed, black40, black5, white, dark }} = theme;

export const SButtonBooking = styled.button`
    grid-area: booking;
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : '100%'};
    font-weight: 600;
    font-size: ${({fontSize}) => fontSize};
    border: solid 1px;
    border-radius: ${({borderRadius}) => borderRadius};
    &:hover {
        background: ${({condition}) => condition === 'active' ? pressed : null};
    }
    color: ${({condition}) => {
        switch(condition) {
            case 'me':
                return dark;
            case 'busy':
                return black40;
            case 'active':
                return white;
		    default:
			    return condition
        }
    }};
    background: ${({condition}) => {
        switch(condition) {
            case 'me':
                return white;
            case 'busy':
                return black5;
            case 'active':
                return hover;
		    default:
			    return condition
        }
    }};
    @media ${device.mobileL} {
        width: 100%;
    }
`;