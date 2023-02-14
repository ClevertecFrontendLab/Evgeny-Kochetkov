import { v4 as uuidv4 } from 'uuid';

import { SMainContainerFlex } from '../style';
import { SUl } from './style';

import { config } from './config';

export const Info = ({rule}) => {
    
    const h2 = rule ? 'Правила пользования' : 'Договор оферты';

    function renderInfo(arr) { /* ВНИМАНИЕ! Немного рекурсии */
        const li = arr.map((item) => {

            if(Array.isArray(item)) {
                return renderInfo(item)
            }

            return (
                <li key={uuidv4()}>
                    {item}
                </li>
            )
        });

        return <SUl key={uuidv4()}>{li}</SUl>
    };

    const arr = rule ? config[0] : config[1];
    const termsArr = renderInfo(arr);

    return (
        <SMainContainerFlex>
            <h2>{h2}</h2>
            {termsArr}
        </SMainContainerFlex>
    )
};