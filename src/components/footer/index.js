import { SFooter, SCopyright, SUlSocialLinks } from './style';

import { config } from './config';

export const Footer = () => {

    const {socialLinksArr} = config;

    function renderSocialLinks(arr) {
        return arr.map(({name, icon, href}) => (
                <li key={name}>
                    <a href={href}>
                        <img src={icon} alt={name}/>
                    </a>
                </li>
            )
        )
    }

    const socialLinks = renderSocialLinks(socialLinksArr);

    return (
        <SFooter>
            <SCopyright>
                © 2020-2023 Cleverland. Все права защищены.
            </SCopyright>
            <SUlSocialLinks>
                {socialLinks}
            </SUlSocialLinks>
        </SFooter>
    )
};
