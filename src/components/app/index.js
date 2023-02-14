import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../../global-styles';
import { MainPage } from '../../pages/main';
import { Rule } from '../../pages/rule';
import { Contract } from '../../pages/contract';
import { BookPage } from '../../pages/book';

export const App = () => (
    <>
        <GlobalStyle/>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/books/all'/>}/>
                <Route path='/books/:categoty' element={<MainPage/>}/>
                <Route path='/rule' element={<Rule/>}/>
                <Route path='/contract' element={<Contract/>}/>
                <Route path='/books/:categoty/:bookId' element={<BookPage/>}/>
            </Routes>
        </HashRouter>
    </>   
);