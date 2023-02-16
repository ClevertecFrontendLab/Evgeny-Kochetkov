import { useMemo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation  } from 'react-router-dom';

import { Spinner } from '../spinner';
import { ErrorMessage } from '../error-message';

import { useBooksService } from '../../services/books-service';

import { changeTileDisplay, closeTileDisplay, closeActiveHamburgerMenu } from '../../action';

import { STabs, STabItem, SUl, SLi, activeLinkMenuStyle, linkMenuStyle, activeLinkCategoryStyle, LinkCategoryStyle, SCheckMark, SBtn, SUlMenu} from './style';

import checkMark from '../../assets/icons/check-mark.svg';
import checkMarkDark from '../../assets/icons/check-mark-dark.svg';

import { config } from './config';

export const Menu = ({displayNone}) => {
    
    const activeTile = useSelector(state => state.activeShowcaseOfBooksTile);
    const activeMenu = useSelector(state => state.activeHamburgerMenu);
    const dispatch = useDispatch();

    const { pathname } = useLocation();
    const activeBooks = useMemo(() => pathname.includes('books'), [pathname]);

    const [categoriesList, setCategoriesList] = useState([]);
    const {loading, error, clearError, getCategories} = useBooksService();

    const onRequest = async () => {
        clearError(null);
        const categoriesArr = await getCategories();
        setCategoriesList(categoriesArr);
    }

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    function renderShowcaseOfBooks(active) {

        const testIdBooks = window.innerWidth > 768 ? 'navigation-books' : 'burger-books';

        const tabItemList = categoriesList.map(({name, path, id}, i) => (
                <SLi active={active} key={id}>
                    <NavLink 
                        data-test-id={i === 0 ? testIdBooks : null} 
                        to={`/books/${path}`} 
                        style={({ isActive }) => isActive ? activeLinkCategoryStyle : LinkCategoryStyle}
                        onClick={() => dispatch(closeActiveHamburgerMenu())}
                    >
                        {name}
                        <span>
                            {0}
                        </span>
                    </NavLink>
                </SLi>
            )
        )

        const img = <SCheckMark active={active} src={activeBooks ? checkMark : checkMarkDark} alt='галочка'/>;
        const testIdShowcase = window.innerWidth > 768 ? 'navigation-showcase' : 'burger-showcase';
        
        return (
            <>
                <STabItem>
                    <NavLink
                        onClick={() => dispatch(changeTileDisplay())}
                        data-test-id={testIdShowcase}
                        to='/books/all' 
                        style={({ isActive }) => isActive ? activeLinkMenuStyle : (activeBooks ? activeLinkMenuStyle : linkMenuStyle)}>
                        Витрина книг
                    </NavLink>
                    <SBtn type='button' onClick={() => dispatch(changeTileDisplay())}>
                        {img}
                    </SBtn>
                </STabItem>
                <SUl active={active}>
                    {tabItemList}
                </SUl>
            </>
        )
    };

    function closeModalFreeZone(e) {
        const modal = document.querySelector('[data="menu"]');

        if(e.target === modal) {
            dispatch(closeActiveHamburgerMenu());
        }
    }

    const testIdTerms = window.innerWidth > 768 ? 'navigation-terms' : 'burger-terms';
    const testIdContract = window.innerWidth > 768 ? 'navigation-contract' : 'burger-contract';
    const errorMessage = error ? <ErrorMessage/> : null;
    /* const load = loading ? <Spinner/> : null; */
    const showcaseOfBooks = /* loading || */ error ? null : renderShowcaseOfBooks(activeTile);

    return (
        <STabs data-test-id='burger-navigation' active={activeMenu} data='menu' displayNone={displayNone} onClick={(e) => closeModalFreeZone(e)}>
            <SUlMenu>
                {errorMessage}
                {/* {load} */}
                {showcaseOfBooks}
                <STabItem>
                    <NavLink 
                        data-test-id={testIdTerms} 
                        to='/rule' 
                        style={({ isActive }) => isActive ? activeLinkMenuStyle : linkMenuStyle}
                        onClick={() => dispatch(closeTileDisplay())}
                    >
                        Правила пользования
                    </NavLink>
                </STabItem>
                <STabItem>
                    <NavLink 
                        data-test-id={testIdContract} 
                        to='/contract' 
                        style={({ isActive }) => isActive ? activeLinkMenuStyle : linkMenuStyle}
                        onClick={() => dispatch(closeTileDisplay())}
                    >
                        Договор оферты
                    </NavLink>
                </STabItem>
            </SUlMenu>
        </STabs>
    )
};