import React, { useCallback, useEffect, useReducer, useState } from "react";


const ReducerSample = () => {


    useEffect(() => {
        return () => {
            console.log("REDUCER REMOVED!")
        }
    }, [])

    const initialState = { count: 0 };

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
        </div>
    );
}

export default ReducerSample;