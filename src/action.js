export const list = () => ({type: 'LIST'});

export const tile = () => ({type: 'TILE'});

export const closeErrorMessage = () => ({type: 'CLOSE_ERROR_MESSAGE'});

export const changeTileDisplay = () => ({type: 'CHANGE_TILE_DISPLAY_SHOWCASE_OF_BOOKS'});

export const closeTileDisplay = () => ({type: 'CLOSE_TILE_DISPLAY_SHOWCASE_OF_BOOKS'});

export const closeActiveHamburgerMenu = () => {

    document.body.style.overflow = '';
    
    return {type: 'CLOSE_ACTIVE_HAMBURGER_MENU'}
};

export const changeActiveHamburgerMenu = () => {

    if(document.body.style.overflow) {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
    
    return {type: 'CHANGE_ACTIVE_HAMBURGER_MENU'}
};

export const changeActiveCommentsBlock = () => ({type: 'CHANGE_ACTIVE_COMMENTS_BLOCK'});

export const changeActiveInputType = (inputType) => ({type: 'CHANGE_ACTIVE_INPUT_TYPE', payload: inputType});

export const setThumbsSwiper = () => ({type: 'SET_THUMBS_SWIPER'});

/* export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * 10)}) */