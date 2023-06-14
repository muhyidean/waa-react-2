import axios from "axios";
import { useEffect, useState, Fragment, useCallback, useMemo, useRef } from "react";
import Review from "../Review/Review";
import './ProductDetails.css';

const ProductDetails = (props) => {

    // FOR DEMO PURPOSES ======

    const [value, setValue] = useState(0);  // click button , this will change the value for useMemo example
    const textField = useRef();
    // ========================

    const [productDetail, setProductDetail] = useState({});


    useEffect(
        () => {
            axios.get('http://localhost:8080/api/v1/products/' + props.id)
                .then(response => {
                    setProductDetail(response.data)
                    // console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [props.id])


    // JUST FOR EXPLNATION useMemo()=========================

    const expensiveComputation = (num) => {
        console.log('Computation done!  '); // 
        return num;
    };

    const memoizedValue = useMemo(() => expensiveComputation(value), [value]);
    // const memoizedValue = expensiveComputation(value); // Uncomment this and then click on the Hide/Show button to see how the value is loading everytime it is re-rendered

   
    const result = memoizedValue + 5;

    const memoizedFunction = (num) => {
        setValue(num);
        console.log("MEMOIZED VALUE:" + memoizedValue);
    }

    const useMemoDemo =
        <div>
            <div>

                <input type="number" ref={textField} />
                <button onClick={() => memoizedFunction(textField.current.value)}> Compute</button>

            </div>
           
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
                    {useMemoDemo}
                    <div style={{ textAlign: "left" }}>
                        {space} Reviews <br />
                        {productDetail.reviews != null ? productDetail.reviews.map(review => {
                            return <Review comment={review.comment} key={review.id} />
                        }) : "NO REVIEWS"}
                    </div>



                </div>
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;