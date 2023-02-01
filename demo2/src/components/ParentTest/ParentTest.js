import { useCallback, useState } from "react";
import ChildTest from "../ChildTest/ChildTest";

function ParentTest() {

    // FOR DEMO PURPOSES ====== useCallback() ======= 
    const [value, setValue] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);


    // const doSomething = () => {
    //     setValue(v => v + incrementValue);
    // }

    const doSomething = useCallback(() => {
        setValue(v => v + incrementValue);
    }, [incrementValue])
    // ==============

    return (
        <div className="Field" style={{ 'width': '200px', 'backgroundColor': 'orange' }}>
            <h3> PARENT TEST</h3>
            <label>{value}</label>
            <button onClick={() => { setIncrementValue(incrementValue + 1) }} > Add Value +</button>
            <div className="Field">
                <ChildTest buttonClicked={doSomething} />
            </div>



        </div>
    );

}

export default ParentTest;