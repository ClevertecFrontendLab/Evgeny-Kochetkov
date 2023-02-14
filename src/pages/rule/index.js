import { Info } from "../../components/info";

import { SMainContainerGred } from '../../components/style';

import { Header } from '../../components/heder';
import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';

export const Rule = () => (
    <>
        <Header/>
        <main>
            <SMainContainerGred>
                <Menu/>
                <Info rule={true}/>
            </SMainContainerGred>
        </main>
        <Footer/>
    </>
)