import React, { useContext } from 'react';
import { ThemeColorContext } from '../../context/ThemeColor';
import './Review.css'

const Review = (props) => {

    const colorContext = useContext(ThemeColorContext);

    return (

        <div style={{ color: colorContext.color }} className='Review'>
            {props.comment}
        </div>

    );

}

export default Review;