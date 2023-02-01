import React from 'react';


const ChildTest = (props) => {
    console.log("RENDER FROM TEST")

    return (

        <div style={{ 'backgroundColor': 'white'}}>
            <h3> CHILD TEST</h3>
            <label>{props.val}</label>
            <button  onClick={props.buttonClicked}> TEST BUTTON ++</button>
            
        </div>
    );

}

export default React.memo(ChildTest);

