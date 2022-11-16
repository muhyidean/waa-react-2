import React, { useCallback, useEffect, useReducer, useState } from "react";
import Test from "../Test/Test";

const ReducerSample = () => {


    const initialState = { count: 0 };

    // FOR DEMO PURPOSES ====== useCallback() ======= 
    const [value, setValue] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);

    // const doSomething = () => {
    //     setValue(v => v + incrementValue);
    // }

    const doSomething = useCallback(() => {
        setValue(v => v + incrementValue);
    }, [incrementValue])
    //==============

    useEffect(() => {
        return () => {
            console.log("REDUCER REMOVED!")
        }
    }, [])

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <React.Fragment>
                Count: {state.count}
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </React.Fragment>
        );
    }
    return (
        <div>
            This value is for the useReducer: {Counter()}

            <div className="Field">
                <label>{value}</label>
                <button onClick={() => { setIncrementValue(incrementValue + 1) }} > Add Value +</button>
                <Test buttonClicked={doSomething} />
            </div>

        </div>);
}

export default ReducerSample;