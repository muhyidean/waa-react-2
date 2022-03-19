import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Review from "../Review/Review";
import './ProductDetails.css';

const ProductDetails = (props) => {

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

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let productDetailsDisplay = null;
    if (props.id != 0) {
        console.log('HERE');
        productDetailsDisplay = (

            <div className="ProductDetail">
                <div>
                    Product Details
                </div>
                <h1> {productDetail.name}</h1>
                <div >
                    {productDetail.price}
                    <br />
                    <div style={{ textAlign: "left" }}>
                        {space} Reviews <br />
                        {productDetail.reviews != null ? productDetail.reviews.map(review => {
                            return <Review comment={review.comment} />
                        }) : null}
                    </div>



                </div>
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;