import React from 'react';


const Test = React.memo((props) => {
    console.log("RENDER FROM TEST")

    return (

        <div>
            <h3> TEST COMPONENT INSIDE REDUCER</h3>
            <button onClick={props.buttonClicked} > TEST BUTTON ++</button>

        </div>
    );

})

export default Test;

