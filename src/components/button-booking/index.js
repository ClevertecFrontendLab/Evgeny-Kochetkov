import { SButtonBooking } from './style';

export const ButtonBooking = ({bookingProp, width, height, borderRadius, fontSize}) => {

    function renderButton({booking, me, bookingDate}) {
        if(booking) {
            if(me) {
                return (
                    <SButtonBooking condition='me' width={width} height={height} borderRadius={borderRadius} fontSize={fontSize}>
                        ЗАБРОНИРОВАНА
                    </SButtonBooking>
                )
                
            }

            return (
                <SButtonBooking condition='busy' width={width} height={height} borderRadius={borderRadius} fontSize={fontSize}>
                    ЗАНЯТА ДО {bookingDate}
                </SButtonBooking>
            )
        }

        return (
            <SButtonBooking condition='active' width={width} height={height} borderRadius={borderRadius} fontSize={fontSize}>
                ЗАБРОНИРОВАТЬ
            </SButtonBooking>
        )
    }
        

    const button = renderButton(bookingProp);

    return button;
};