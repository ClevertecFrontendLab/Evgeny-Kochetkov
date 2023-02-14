import { SMainContainerFlex, SMainContainerGred, SContent } from '../../components/style';

import { Header } from '../../components/heder';
import { Menu } from '../../components/menu';
import { NavigationList } from '../../components/navigation-list';
import { BookItem } from '../../components/books';
import { Footer } from '../../components/footer';

export const MainPage = () => (
    <>
        <Header/>
        <main>
            <SMainContainerGred>
                <Menu/>
                <SMainContainerFlex>
                    <NavigationList/>
                    <BookItem/>
                </SMainContainerFlex>
            </SMainContainerGred>
        </main>
        <Footer/>
    </>
);
