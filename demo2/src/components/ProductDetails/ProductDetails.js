import axios from "axios";
import { useEffect, useState } from "react";
import Review from "../Review/Review";

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

    let productDetailsDisplay = null;
    if (props.id != 0) {
        console.log('HERE');
        productDetailsDisplay = (

            <div className="Content">
                <div>
                    Product Details
                </div>
                <h1> {productDetail.name}</h1>
                <div >
                    {productDetail.price}
                    {productDetail.reviews != null ? productDetail.reviews.map(review => {
                        return <Review comment={review.comment} />
                    }) : null}

                </div>
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;