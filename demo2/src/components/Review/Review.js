import React, { useContext } from 'react';
import { ThemeColorContext } from '../../context/ThemeColor';
import './Review.css'

const Review = React.memo((props) => {

    const colorContext = useContext(ThemeColorContext);

    console.log("RENDER FROM REVIEW");
    return (

        <div style={{ color: colorContext.color }} className='Review'>
            {props.comment}
            <button onClick={props.buttonClicked} > Review Button</button>
        </div>

    );

})

export default Review;