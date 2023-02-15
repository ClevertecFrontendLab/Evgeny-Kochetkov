import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ButtonBooking } from '../button-booking'; 
import { Rating } from '../rating';
import { Slider } from '../slider';
import { Spinner } from '../spinner';
import { ErrorMessage } from '../error-message';

import { changeActiveCommentsBlock } from '../../action';

import { useBooksService } from '../../services/books-service';

import {
    SBookListNavigate, 
    SUl,
    SBookContainerFlex,
    SBookContainerGrid,
    SH2, 
    SAuthor, 
    SH3, 
    SP, 
    SInfoContainerFlex,
    SRatingContainerGrid, 
    SRatindNum, 
    SInfoContainerGrid,
    SDt,
    SDd,
    SCommentsConteinerFlex,
    SCommentsFlex,
    SCommentFlex,
    SNameFlex,
    SBlockquote,
    SButtonLeaveAComment,
    SAmountComments,
    SLiCategory,
    SUserAvatar,
    SUserName,
    SUserCommentDate,
    SCheckMark,
    SBtn
} from './style';

import checkMarkDark from '../../assets/icons/check-mark-dark.svg';
import avatar from '../../assets/img/avatar-users.png'

export const Book = () => {

    const activeCommentsBlock = useSelector(state => state.activeCommentsBlock);
    const dispatch = useDispatch();
    
    const [book, setBook] = useState({});
    const hrefId = document.location.href.split('/').pop();
    const {loading, error, clearError, getBook} = useBooksService();

    const onRequest = async () => {
        clearError(null);
        const book = await getBook(hrefId);
        setBook(book);
    }

    useEffect(() => {
        onRequest(); // eslint-disable-next-line
    }, [])
    

    function renderBookItem(book) {

        function renderBookListNavigate({categories, title}) {
            return (
                <SBookListNavigate>
                    <SUl>
                        <SLiCategory key={categories ? categories[0] : null}>
                            <NavLink to={`/books/${categories ? categories[0] : null}`}>
                                {`${categories ? categories[0] : null} / ${title}`}
                            </NavLink>
                        </SLiCategory>
                    </SUl>
                </SBookListNavigate>
            )
        };

        function renderBook({title, authors, issueYear, booking, description}) {
            return (
                <SBookContainerGrid>
                    <Slider images={book.images}/>
                    <SH2>
                        {title}
                    </SH2>
                    <SAuthor>
                        {`${authors/* .join(', ') */}, ${issueYear}`}
                    </SAuthor>
                    <ButtonBooking 
                        bookingProp={booking} 
                        width='350px' 
                        height={window.innerWidth > 425 ? '52px' : '40px'} 
                        borderRadius='30px' 
                        fontSize={window.innerWidth > 425 ? '16px' : '12px'}
                    />
                    <SH3>
                        O книге
                    </SH3>
                    <SP>
                        {description}
                    </SP>
                </SBookContainerGrid>
            )
        };

        function renderBookRating({rating}) {
            return (
                <SRatingContainerGrid>
                    <SH3>
                        Рейтинг
                    </SH3>
                    <Rating ratingProp={rating}/>
                    <SRatindNum>
                        {rating}
                    </SRatindNum>
                </SRatingContainerGrid>
            )
        };

        function renderBookInfo({publish, issueYear, pages, cover, format, categories, weight, ISBN, producer}) {
            return (
                <SInfoContainerGrid>
                    <SH3>
                        Подробная информация
                    </SH3>
                    <SDt gridAria='publish'>
                        Издательство
                    </SDt>
                    <SDd gridAria='publishDD'>
                        {publish}
                    </SDd>
                    <SDt gridAria='year'>
                        Год издания
                    </SDt>
                    <SDd gridAria='yearDD'>
                        {issueYear}
                    </SDd>
                    <SDt gridAria='pages'>
                        Страниц
                    </SDt>
                    <SDd gridAria='pagesDD'>
                        {pages}
                    </SDd>
                    <SDt gridAria='cover'>
                        Переплёт
                    </SDt>
                    <SDd gridAria='coverDD'>
                        {cover}
                    </SDd>
                    <SDt gridAria='format'>
                        Формат
                    </SDt>
                    <SDd gridAria='formatDD'>
                        {format}
                    </SDd>
                    <SDt gridAria='categories'>
                        Жанр
                    </SDt>
                    <SDd gridAria='categoriesDD'>
                        {categories ? categories[0] : 'нет жанра'}
                    </SDd>
                    <SDt gridAria='weight'>
                        Вес
                    </SDt>
                    <SDd gridAria='weightDD'>
                        {weight}
                    </SDd>
                    <SDt gridAria='isbn'>
                        ISBN
                    </SDt>
                    <SDd gridAria='isbnDD'>
                        {ISBN}
                    </SDd>
                    <SDt gridAria='producer'>
                        Изготовитель
                    </SDt>
                    <SDd gridAria='producerDD'>
                        {producer}
                    </SDd>
                </SInfoContainerGrid>
            )
        };

        function renderComments(commentsArr) {

            if(!commentsArr) return (
                <SCommentsConteinerFlex>
                    <SH3>
                        Отзывы
                        <SAmountComments>
                            0
                        </SAmountComments>
                    </SH3>
                </SCommentsConteinerFlex>
            );
    
            function renderComment(arr) {
                return arr.map(({id, rating, text, createdAt, user}) => {
                    
                    const blockquote = text ? (
                        <SBlockquote>
                            {text}
                        </SBlockquote>
                    ) : null
                    
                    const commentDate = new Date(createdAt);
                    const date = commentDate.getDate();
                    const month = commentDate.getMonth();
                    const year = commentDate.getFullYear();
                    const months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','ноября','декабря'];
                    const avatarUrl = user.avatarUrl ? `https://strapi.cleverland.by${user.avatarUrl}` : avatar;

                    return (
                        <SCommentFlex key={id}>
                            <SNameFlex>
                                <SUserAvatar src={avatarUrl} alt='аватар пользователя'/>
                                <SUserName>
                                    {`${user.firstName} ${user.lastName}`}
                                </SUserName>
                                <SUserCommentDate>
                                    {`${date} ${months[month]} ${year}`}
                                </SUserCommentDate>
                            </SNameFlex>
                            <Rating ratingProp={rating}/>
                            {blockquote}
                        </SCommentFlex>
                    )
                })
            }
    
            const comments = renderComment(commentsArr);
            const amountComments = comments.length;
    
            const renderComments = amountComments && activeCommentsBlock ? (
                <SCommentsFlex>
                    {comments}
                </SCommentsFlex>
            ) : null;
    
            return (
                <SCommentsConteinerFlex>
                    <SH3>
                        Отзывы
                        <SAmountComments>
                            {amountComments}
                        </SAmountComments>
                        <SBtn data-test-id='button-hide-reviews' type='button' onClick={() => dispatch(changeActiveCommentsBlock())}>
                            <SCheckMark active={activeCommentsBlock} src={checkMarkDark} alt='галочка'/>
                        </SBtn>
                    </SH3>
                    {renderComments}
                </SCommentsConteinerFlex>
            )
        };

        const comments = renderComments(book.comments);
        const bookListNavigate = renderBookListNavigate(book);
        const bookItem = renderBook(book);
        const ratingBook = renderBookRating(book);
        const bookInfo = renderBookInfo(book);

        return (
            <SBookContainerFlex>
                {bookListNavigate}
                {bookItem}
                <SInfoContainerFlex>
                    {ratingBook}
                    {bookInfo}
                    {comments}
                </SInfoContainerFlex>
                <SButtonLeaveAComment type='button' data-test-id='button-rating'>
                    ОЦЕНИТЬ КНИГУ
                </SButtonLeaveAComment>
            </SBookContainerFlex>
        )

    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const load = loading ? <Spinner/> : null;
    const bookItem = loading || error ? null : renderBookItem(book);

    return (
        <>
            {errorMessage}
            {load}
            {bookItem}
        </>
    )
};