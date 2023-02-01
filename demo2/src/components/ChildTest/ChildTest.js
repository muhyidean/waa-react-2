import React from 'react';


const ChildTest = (props) => {
    console.log("RENDER FROM TEST")

    return (

        <div style={{ 'backgroundColor': 'white'}}>
            <h3> CHILD TEST</h3>
            <button onClick={props.buttonClicked} > TEST BUTTON ++</button>

        </div>
    );

}

export default React.memo(ChildTest);

