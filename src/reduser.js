import { initialState } from './initial-state';

export const reduser = (state = initialState, action) => {
	switch (action.type) {
		case 'CLOSE_ERROR_MESSAGE':
			return {
				...state,
				activeErrorMessage: false,
			}	

		case 'SET_THUMBS_SWIPER':
			return {
				...state,
				thumbsSwiper: state.thumbsSwiper,
			}	

		case 'CHANGE_ACTIVE_INPUT_TYPE':
			return {
				...state,
				activeInputType: action.payload,
			}	

		case 'CHANGE_ACTIVE_COMMENTS_BLOCK':
			return {
				...state,
				activeCommentsBlock: !state.activeCommentsBlock,
			}	

		case 'CHANGE_ACTIVE_HAMBURGER_MENU':
			return {
				...state,
				activeHamburgerMenu: !state.activeHamburgerMenu
			}
		case 'CLOSE_ACTIVE_HAMBURGER_MENU':
			return {
				...state,
				activeHamburgerMenu: false
			}
		case 'CHANGE_TILE_DISPLAY_SHOWCASE_OF_BOOKS':
			return {
				...state,
				activeShowcaseOfBooksTile: !state.activeShowcaseOfBooksTile,
			}
		case 'CLOSE_TILE_DISPLAY_SHOWCASE_OF_BOOKS':
			return {
				...state,
				activeShowcaseOfBooksTile: false,
			}
		case 'LIST':
			return {
				...state,
				bookDisplayFormatTile: false
			};
		case 'TILE':
			return {
				...state,
				bookDisplayFormatTile: true
			};
		default:
			return state
	}
};