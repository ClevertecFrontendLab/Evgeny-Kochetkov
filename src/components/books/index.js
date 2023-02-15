import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ButtonBooking } from '../button-booking';
import { Rating } from '../rating';
import { Spinner } from '../spinner';
import { ErrorMessage } from '../error-message';

import { useBooksService } from '../../services/books-service';

import { SBooksContainerGrid, SBookItem, SBookItemContent, SImg, SBookName, SBookAuthor } from './style';

import noBookImg from '../../assets/img/no-image.png';

export const BookItem = () => {
    const [bookList, setBooksList] = useState([]);

    const formatTile = useSelector(state => state.bookDisplayFormatTile);

    const {loading, error, clearError, getAllBooks} = useBooksService();

    const onRequest = async () => {
        clearError(null);
        const bookArr = await getAllBooks();
        setBooksList(bookArr);
    }

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])
    
    function renderBook(arr) {
        return arr.map(({id, image, title, authors, issueYear, rating, booking, categories}) => (
                <SBookItem data-test-id='card' formatTile={formatTile} key={id}>
                    <NavLink to={`/books/${categories[0]}/${id}`}>
                        <SBookItemContent formatTile={formatTile}>
                            <SImg 
                                id='img' 
                                src={image ? `https://strapi.cleverland.by${image.url}` : noBookImg}
                                alt={`Книга: ${title}`} 
                                formatTile={formatTile}
                            />
                            <Rating 
                                id='rating' 
                                ratingProp={rating}
                            />
                            <SBookName 
                                id='name' 
                                formatTile={formatTile}
                            >
                                {title}
                            </SBookName>
                            <SBookAuthor 
                                id='author' 
                                formatTile={formatTile}
                            >
                                {`${authors.join('')}, ${issueYear}`}
                            </SBookAuthor>
                            <ButtonBooking 
                                id='booking' 
                                bookingProp={booking} 
                                width='174px' 
                                height='40px' 
                                borderRadius='20px' 
                                fontSize='12px'
                            />
                        </SBookItemContent>
                    </NavLink>
                </SBookItem>
            )
        )
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const load = loading ? <Spinner/> : null;
    const books = loading || error ? null : renderBook(bookList);

    return (
        <SBooksContainerGrid formatTile={formatTile}>
            {errorMessage}
            {load}
            {books}
        </SBooksContainerGrid>
    );
};