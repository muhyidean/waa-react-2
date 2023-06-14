import Products from "../Products/Products";
import React, { useEffect, useState } from 'react';
import NewProductHook from "../../components/NewProduct/NewProductHooks";

import axios from 'axios';
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { ThemeColorContext } from "../../context/ThemeColor";
import ReducerSample from "../../components/ReducerSample/ReducerSample";
import useLocalStorage from "../../hooks/useLocalStorage";
import ParentTest from "../../components/ParentTest/ParentTest";
import { fetchService } from "../../services/fetchServices";


export default function Dashboard() {

    const [flag, setFlag] = useState(true);
    const [themeColorState, setThemeColorState] = useState({ color: "red" });
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

    const fetchProducts = async () => {
        setProductsState(await fetchService.get("products"));
    }

    useEffect(() => {
        fetchProducts()
    }, [flag])

    const flagHandler = () => {
        setFlag(!flag);
    }

    const onChange = (events) => {
        const copy = { ...productState };
        copy[events.target.name] = events.target.value;
        setProductState(copy);
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
        console.log(id)
    }

    const reviewColorHandler = () => {
        if (themeColorState.color === "red") {
            setThemeColorState({ color: "blue" });
        }
        else {
            setThemeColorState({ color: "red" });
        }
    }

    return (
        <React.Fragment>
            <ThemeColorContext.Provider value={themeColorState}>
                <div className="Product">
                    <Products
                        products={productsState}
                        deleteProduct={deleteButtonClicked}
                        setSelected={setSelected}
                    />
                </div>
                <button onClick={reviewColorHandler} >Change color</button>
                <div >
                    <ProductDetails
                        id={selectedState}
                    />
                </div>
                <div>
                    {/* To try the other method of adding a new product using react hooks useRef */}
                    <NewProductHook click={flagHandler}/>
                    {/* <NewProduct
                        name={productState.name}
                        price={productState.price}
                        onChange={(event) => { onChange(event) }}
                        addButtonClicked={addButtonClicked}
                    /> */}
                </div>
                <div className="Product">
                    <div className="Content">
                        {flag ? <ReducerSample /> : ""}
                        <button onClick={flagHandler}> Hide</button>
                    </div>

                    <ParentTest />
                </div>
            </ThemeColorContext.Provider>
        </React.Fragment>

    )

}