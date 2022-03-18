import Products from "../Products/Products";
import { useEffect, useState } from 'react';
import NewProduct from "../../components/NewProduct/NewProduct";

import axios from 'axios';

export default function Dashboard() {

    let i = 4;
    const [productsState, setProductsState] = useState(
        [
            { id: 1, name: "iPhone 13", price: 3000 },
            { id: 2, name: "iPhone 12", price: 3000 },
            { id: 3, name: "galaxy s20", price: 3000 }
        ]
    );

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
        console.log('CALLED!');
        fetchProducts()
    },
        [])

    const [productState, setProductState] = useState(
        {
            name: "",
            price: ""
        }
    )

    const onChange = (events) => {
        const copy = { ...productState };
        copy[events.target.name] = events.target.value;
        setProductState(copy);
    }

    const addButtonClicked = () => {
        const copy = { ...productState };
        copy.id = i;
        i++;
        const copyProductsState = [...productsState]
        copyProductsState.push(copy);
        setProductsState(copyProductsState);
    }

    return (
        <div>
            <Products products={productsState} />
            <div> 
                {/* To try the other method of adding a new product using react hooks useRef */}
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