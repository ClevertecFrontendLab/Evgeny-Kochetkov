/* Fonts */
const font = 'Montserrat, sans-serif';
/* Colors */
const accent = '#FF5253';
const dark = '#363636';
const white = '#FFFFFF';
const dark30 = 'rgba(54, 54, 54, 0.3)';
const warning = '#FFBC1F';
const positive = '#00CA71';
const negative = '#F42C4F';
const negativeBg = '#FEEBEA';
const positiveBg = '#EBF9F1';
const black70 = '#727272';
const black40 = '#A7A7A7';
const black20 = '#BFC4C9';
const black10 = '#EBEBEB';
const black5 = '#F9F9FA';
const pressed = 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%)';
const hover = 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)';
/* Shadow */
const shadow = '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24)';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1140px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const theme = {
    font,
    shadow,
    colors: {
        accent,
        dark,
        white,
        dark30,
        warning,
        positive,
        negative,
        negativeBg,
        positiveBg,
        black70,
        black40,
        black20,
        black10,
        black5,
        pressed,
        hover
    }
};