import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ButtonBooking } from '../button-booking'; 
import { Rating } from '../rating';
import { Slider } from '../slider';

import { changeActiveCommentsBlock } from '../../action';

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

export const Book = () => {

    const bookArr = useSelector(state => state.bookArr);
    const activeCommentsBlock = useSelector(state => state.activeCommentsBlock);

    const dispatch = useDispatch();

    const hrefId = document.location.href.split('/').pop();
    const [bookItem] = bookArr.filter(({id}) => id === hrefId);

    function renderBookListNavigate({id, category, genre, name}) {
        return (
            <SBookListNavigate>
                <SUl>
                    <SLiCategory key={category}>
                        <NavLink to={`/books/${category}`}>
                            {`${genre} / ${name}`}
                        </NavLink>
                    </SLiCategory>
                </SUl>
            </SBookListNavigate>
        )
    };

    function renderBook({name, author, year, booking, descr}) {
        return (
            <SBookContainerGrid>
                <Slider/>
                <SH2>
                    {name}
                </SH2>
                <SAuthor>
                    {`${author}, ${year}`}
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
                    {descr}
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

    function renderBookInfo({publishingHouse, year, pages, binding, format, genre, wt, isbn, manufacturer}) {
        return (
            <SInfoContainerGrid>
                <SH3>
                    Подробная информация
                </SH3>
                <SDt gridAria='publishingHouse'>
                    Издательство
                </SDt>
                <SDd gridAria='publishingHouseDD'>
                    {publishingHouse}
                </SDd>
                <SDt gridAria='year'>
                    Год издания
                </SDt>
                <SDd gridAria='yearDD'>
                    {year}
                </SDd>
                <SDt gridAria='pages'>
                    Страниц
                </SDt>
                <SDd gridAria='pagesDD'>
                    {pages}
                </SDd>
                <SDt gridAria='binding'>
                    Переплёт
                </SDt>
                <SDd gridAria='bindingDD'>
                    {binding}
                </SDd>
                <SDt gridAria='format'>
                    Формат
                </SDt>
                <SDd gridAria='formatDD'>
                    {format}
                </SDd>
                <SDt gridAria='genre'>
                    Жанр
                </SDt>
                <SDd gridAria='genreDD'>
                    {genre}
                </SDd>
                <SDt gridAria='wt'>
                    Вес
                </SDt>
                <SDd gridAria='wtDD'>
                    {wt}
                </SDd>
                <SDt gridAria='isbn'>
                    ISBN
                </SDt>
                <SDd gridAria='isbnDD'>
                    {isbn}
                </SDd>
                <SDt gridAria='manufacturer'>
                    Изготовитель
                </SDt>
                <SDd gridAria='manufacturerDD'>
                    {manufacturer}
                </SDd>
            </SInfoContainerGrid>
        )
    };

    function renderComment(arr) {

        const comment = arr.map(({avatar, name, date, stars, comment}) => {
            
            const blockquote = comment ? (
                <SBlockquote>
                    {comment}
                </SBlockquote>
            ) : null
    
            return (
                <SCommentFlex key={name}>
                    <SNameFlex>
                        <SUserAvatar src={avatar} alt='аватар пользователя'/>
                        <SUserName>
                            {name}
                        </SUserName>
                        <SUserCommentDate>
                            {date}
                        </SUserCommentDate>
                    </SNameFlex>
                    <Rating ratingProp={stars}/>
                    {blockquote}
                </SCommentFlex>
            )
        })

        return comment;
    }

    function renderComments(commentsArr, activeComments) {

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
                        <SCheckMark active={activeComments} src={checkMarkDark} alt='галочка'/>
                    </SBtn>
                </SH3>
                {renderComments}
            </SCommentsConteinerFlex>
        )
    };

    const bookListNavigate = renderBookListNavigate(bookItem);
    const book = renderBook(bookItem);
    const ratingBook = renderBookRating(bookItem);
    const bookInfo = renderBookInfo(bookItem);
    const comments = renderComments(bookItem.comments, activeCommentsBlock);

    return (
        <SBookContainerFlex>
            {bookListNavigate}
            {book}
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
};