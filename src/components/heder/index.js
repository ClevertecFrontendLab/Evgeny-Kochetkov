import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeActiveHamburgerMenu } from '../../action';

import { SHeader, SFlexBox, STitle, SPersonLink, SUserName, SAvatar, SLogo, SHamburger } from './style';

import logo from '../../assets/icons/logo.svg';
import avatar from '../../assets/img/avatar.png';

export const Header = () => {

    const activeHamburger = useSelector(state => state.activeHamburgerMenu);
    const dispatch = useDispatch();

    return (
        <SHeader>
            <Link to='/'>
                <SLogo src={logo} alt='Logo'/>
            </Link>
            <SFlexBox>
                <SHamburger data-test-id='button-burger' active={activeHamburger} onClick={() => dispatch(changeActiveHamburgerMenu())}>
                    <span/>
                    <span/>
                    <span/>
                </SHamburger>
                <STitle>
                    Библиотека
                </STitle>
                <SPersonLink>
                    <SUserName>
                        Привет, Иван!
                    </SUserName>
                    <SAvatar src={avatar} alt='avatar'/>
                </SPersonLink>
            </SFlexBox>
        </SHeader>
    )
};