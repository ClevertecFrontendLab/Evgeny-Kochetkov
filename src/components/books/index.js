import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { SBooksContainerGrid, SBookItem, SBookItemContent, SImg, SBookName, SBookAuthor} from './style';
import { ButtonBooking } from '../button-booking';

import { Rating } from '../rating';

import noBookImg from '../../assets/img/no-image.png';

export const BookItem = () => {
    const bookArr = useSelector(state => state.bookArr);
    const formatTile = useSelector(state => state.bookDisplayFormatTile);
    
    function renderBook(arr) {
        const books = arr.map(({id, imgArr, name, author, year, rating, booking, category}) => (
                <SBookItem data-test-id='card' formatTile={formatTile} key={id}>
                    <NavLink to={`/books/${category}/${id}`}>
                        <SBookItemContent formatTile={formatTile}>
                            <SImg id='img' src={imgArr.length === 0 ? noBookImg : imgArr[0]} alt={`Книга: ${name}`} formatTile={formatTile}/>
                            <Rating id='rating' ratingProp={rating}/>
                            <SBookName id='name' formatTile={formatTile}>{name}</SBookName>
                            <SBookAuthor id='author' formatTile={formatTile}>{`${author.join('')}, ${year}`}</SBookAuthor>
                            <ButtonBooking id='booking' bookingProp={booking} width='174px' height='40px' borderRadius='20px' fontSize='12px'/>
                        </SBookItemContent>
                    </NavLink>
                </SBookItem>
            )
        )

        return (
            <SBooksContainerGrid formatTile={formatTile}>
                {books}
            </SBooksContainerGrid>
        )
    }

    const renderBooks = renderBook(bookArr)
    
    return renderBooks;
};