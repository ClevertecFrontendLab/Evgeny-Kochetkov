import { useSelector, useDispatch } from 'react-redux';

import { SErrorMessage, SStrong } from "./style"

import warning from '../../assets/icons/warning.svg';
import close from '../../assets/icons/close-error.svg';

import { closeErrorMessage } from '../../action';

export const ErrorMessage = () => {

    const activeErrorMessage = useSelector(state => state.activeErrorMessage);
    const dispatch = useDispatch();

    return (
        <SErrorMessage data-test-id='error' active={activeErrorMessage}>
            <img src={warning} alt="warning"/>
            <SStrong>Что-то пошло не так. Обновите страницу через некоторое время.</SStrong>
            <button onClick={() => dispatch(closeErrorMessage())} type="button">
                <img src={close} alt="close"/>
            </button>
        </SErrorMessage>
    )
}