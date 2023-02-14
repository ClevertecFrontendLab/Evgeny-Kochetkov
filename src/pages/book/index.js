import { Header } from '../../components/heder';
import { Footer } from '../../components/footer';
import { Book } from '../../components/book';
import { Menu } from '../../components/menu';

import { SMainContainerGred } from '../../components/style';

export const BookPage = () => (
    <>
        <Header/>
        <main>
            <SMainContainerGred displayFlex={true}>
                <Menu displayNone={true}/>
                <Book/>
            </SMainContainerGred>
        </main>
        <Footer/>
    </>
);