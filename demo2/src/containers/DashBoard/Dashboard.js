import Products from "../Products/Products";
import { useEffect, useState } from 'react';
import NewProduct from "../../components/NewProduct/NewProduct";
import NewProductHook from "../../components/NewProduct/NewProductHooks";

import axios from 'axios';
import ProductDetails from "../../components/ProductDetails/ProductDetails";

export default function Dashboard() {

    let i = 4;
    const [selectedState, setSelectedState] = useState(0);
    const [productsState, setProductsState] = useState(
        [
            { id: 1, name: "iPhone 13", price: 3000 },
            { id: 2, name: "iPhone 12", price: 3000 },
            { id: 3, name: "galaxy s20", price: 3000 }
        ]
    );

    const [productState, setProductState] = useState(
        {
            name: "",
            price: ""
        }
    )

    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/v1/products')
            .then(response => {
                setProductsState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchProducts()
    },
        [])


    const onChange = (events) => {
        const copy = { ...productState };
        copy[events.target.name] = events.target.value;
        setProductState(copy);
    }

    const addButtonClicked = () => {
        axios.post('http://localhost:8080/api/v1/products', productState)
            .then(response => {
                setProductState(response);
                fetchProducts();
            })
    }

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/products/' + id, productState)
            .then(response => {
                fetchProducts();
            })
            .catch(err => {
                console.error(err);
            })
    }

    const setSelected = (id) => {
        setSelectedState(id);
    }

    return (
        <div>
            <Products
                products={productsState}
                deleteProduct={deleteButtonClicked}
                setSelected={setSelected}
            />

            <ProductDetails
                id={selectedState}
                />
            <div>
                {/* To try the other method of adding a new product using react hooks useRef */}
                <NewProductHook
                />


                <NewProduct
                    name={productState.name}
                    price={productState.price}
                    onChange={(event) => { onChange(event) }}
                    addButtonClicked={addButtonClicked}
                />
            </div>



        </div>
    )

}