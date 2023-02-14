import { useSelector, useDispatch } from 'react-redux';
import { SNavigationList, SInputSearch, SInputText, SBtn, SBtnCloseInput, SBtnInput } from './style';
import { list, tile, changeActiveInputType } from '../../action';

import tileIconActive from '../../assets/icons/tile-active.svg';
import tileIcon from '../../assets/icons/tile.svg';
import listIconActive from '../../assets/icons/list-active.svg';
import listIcon from '../../assets/icons/list.svg';
import closeIcon from '../../assets/icons/close.svg';
import search from '../../assets/icons/icon-input-search.svg';
import filter from '../../assets/icons/icon-input-filter.svg';

export const NavigationList = () => {

    const format = useSelector(state => state.bookDisplayFormatTile);
    const activeInputType = useSelector(state => state.activeInputType);
    const dispatch = useDispatch(); 

    const renderBtn = format ? (
        <>
            <SBtn activeInputType={activeInputType} data-test-id='button-menu-view-window' type='button' active={true} format='tile'>
                <img src={tileIconActive} alt='формат отображения - плитка'/>
            </SBtn>
            <SBtn activeInputType={activeInputType} data-test-id='button-menu-view-list' onClick={() => dispatch(list())} type='button' format='list'>
                <img src={listIcon} alt='формат отображения - плитка'/>
            </SBtn>
        </>
    )
    :
    (
        <>
            <SBtn activeInputType={activeInputType} data-test-id='button-menu-view-window' onClick={() => dispatch(tile())} type='button' format='tile'>
                <img src={tileIcon} alt='формат отображения - плитка'/>
            </SBtn>
            <SBtn activeInputType={activeInputType} data-test-id='button-menu-view-list'  type='button' active={true} format='list'>
                <img src={listIconActive} alt='формат отображения - плитка'/>
            </SBtn>
        </>
    )

    return (
        <SNavigationList activeInputType={activeInputType}>
            <SBtnInput 
                activeInputType={activeInputType}
                type='button' 
                onClick={() => dispatch(changeActiveInputType('search'))}
                data-test-id='button-search-open'
            >
                <img src={search} alt="search"/>
            </SBtnInput>
            <SInputSearch 
                activeInputType={activeInputType} 
                type='search'
                placeholder='Поиск книги или автора…' 
                autocomplete="off"
                data-test-id='input-search'
            />
            <SBtnInput 
                activeInputType={activeInputType}
                type='button'
                onClick={() => dispatch(changeActiveInputType('text'))}
            >
                <img src={filter} alt="search"/>
            </SBtnInput>
            <SInputText
                activeInputType={activeInputType} 
                type='text'
                placeholder='По рейтингу'
                autocomplete="off"
                data-test-id='input-search'
            />
            <SBtnCloseInput 
                data-test-id='button-search-close' 
                activeInputType={activeInputType} 
                type='button' 
                onClick={() => dispatch(changeActiveInputType(null))}
                >
                <img src={closeIcon} alt="close"/>
            </SBtnCloseInput>
            {renderBtn}
        </SNavigationList>
    )
};