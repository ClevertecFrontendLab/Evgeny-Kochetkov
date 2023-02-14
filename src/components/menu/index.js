import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation  } from 'react-router-dom';

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

    function renderShowcaseOfBooks(active) {

        const testIdBooks = window.innerWidth > 768 ? 'navigation-books' : 'burger-books';

        const tabItemList = config.tabItemArr.map(({name, amount, href}, i) => (
                <SLi active={active} key={name} amount={amount}>
                    <NavLink 
                        data-test-id={i === 0 ? testIdBooks : null} 
                        to={`/books/${href}`} 
                        style={({ isActive }) => isActive ? activeLinkCategoryStyle : LinkCategoryStyle}
                        onClick={() => dispatch(closeActiveHamburgerMenu())}
                    >
                        {name}
                        <span>
                            {amount}
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

    const showcaseOfBooks = renderShowcaseOfBooks(activeTile);

    const testIdTerms = window.innerWidth > 768 ? 'navigation-terms' : 'burger-terms';
    const testIdContract = window.innerWidth > 768 ? 'navigation-contract' : 'burger-contract';

    return (
        <STabs data-test-id='burger-navigation' active={activeMenu} data='menu' displayNone={displayNone} onClick={(e) => closeModalFreeZone(e)}>
            <SUlMenu>
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