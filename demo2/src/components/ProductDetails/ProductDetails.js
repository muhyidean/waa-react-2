import axios from "axios";
import { useEffect, useState, Fragment, useCallback, useMemo, useRef } from "react";
import Review from "../Review/Review";
import './ProductDetails.css';

const ProductDetails = (props) => {

    // FOR DEMO PURPOSES ======
    const [incrementValue, setIncrementValue] = useState(1); // This is to increase the value
    const [count, setCount] = useState(0); // 
    const [value, setValue] = useState(0);  // click button , this will change the value for useMemo example
    const textField = useRef();
    // ========================

    const [productDetail, setProductDetail] = useState({});


    useEffect(
        () => {
            axios.get('http://localhost:8080/api/v1/products/' + props.id + '/reviews')
                .then(response => {
                    setProductDetail(response.data)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [props.id])


    // JUST FOR EXPLNATION useMemo()=========================

    const expensiveComputation = (num) => {
        console.log('Computation done!  ' + num * 10); // 
        return num * 10;
    };
    const memoizedValue = useMemo(() => expensiveComputation(value), [value]);
    // const memoizedValue = expensiveComputation(value); // Uncomment this and then click on the Hide/Show button to see how the value is loading everytime it is re-rendered

    const memoizedFunction = (num) => {
        setValue(num);
        console.log("MEMOIZED VALUE:" + memoizedValue);
    }

    // FOR DEMO PURPOSES ====== useCallback() ======= 
    const plainIncrement = () => {
        setCount(c => c + incrementValue); //1
    }

    const useCallbackIncrement = useCallback(() => {
        setCount(c => c + incrementValue);
    }, [incrementValue]); // i

    const useCallBackAndMemoDemo = <div>
        <div>

            <input type="number" ref={textField} />
            {/*  */}
            <button onClick={() => memoizedFunction(textField.current.value)}> Compute</button>

        </div>
        <div>useCallback Value Count: {count}</div>

        <button onClick={() => {
            setIncrementValue(incrementValue + 5);
            console.log(incrementValue);
        }} > Add 5 </button>

        {/* plainIncrement */}
    </div>

    // ====== useCallback() ======= 

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let productDetailsDisplay = null;
    if (props.id != 0) {

        productDetailsDisplay = (

            <div className="ProductDetail">
                <div>
                    Product Details
                </div>
                <h1> {productDetail.name}</h1>
                <div >
                    {productDetail.price}
                    <br />
                    {/* Make a conditional render to show student and hide with a button  */}
                    {useCallBackAndMemoDemo}
                    <div style={{ textAlign: "left" }}>
                        {space} Reviews <br />
                        {productDetail.reviews != null ? productDetail.reviews.map(review => {
                            return <Review comment={review.comment} buttonClicked={useCallbackIncrement} />
                        }) : null}
                    </div>



                </div>
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;