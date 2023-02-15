import { SButtonBooking } from './style';

export const ButtonBooking = ({bookingProp, width, height, borderRadius, fontSize}) => {

    function renderButton(bookingProp) {

        if(!bookingProp) {
            return (
                <SButtonBooking condition='active' width={width} height={height} borderRadius={borderRadius} fontSize={fontSize}>
                    ЗАБРОНИРОВАТЬ
                </SButtonBooking>
            )
        }

        const {order, dateOrder} = bookingProp;
        const bookingDate = new Date(dateOrder);
        const date = bookingDate.getDate();
        const month = bookingDate.getMonth();

        return (
            <SButtonBooking condition='busy' width={width} height={height} borderRadius={borderRadius} fontSize={fontSize}>
                ЗАНЯТА ДО {`${date}.${month < 10 ? `0${month + 1}` : month + 1}`}
            </SButtonBooking>
        )
    }
        

    const button = renderButton(bookingProp);

    return button;
};