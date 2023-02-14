import { SRating, SStar, SNoRating } from './style';

export const Rating = ({ratingProp}) => {

    function renderStars(rating) {
        if (rating) {
            let r = Math.round(rating);
            const starArr = [];

            for (let i = 0; i < 5; i += 1) {
                if (r > 0) {
                    r -= 1;
                    starArr.push(<SStar key={i} active={true}/>);
                } else {
                    starArr.push(<SStar key={i}/>)
                }
            }

            return starArr;
        }

        return <SNoRating>ещё нет оценок</SNoRating>
    }
    
    const stars = renderStars(ratingProp);
    
    return (
        <SRating>
            {stars}
        </SRating>
    )
};