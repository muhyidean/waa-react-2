import Products from "../Products/Products";
import { useState } from 'react';
import NewProduct from "../../components/NewProduct/NewProduct";

export default function Dashboard() {

    let i = 4;
    const [productsState, setProductsState] = useState(
        [
            { id: 1, name: "iPhone 13", price: 1100 },
            { id: 2, name: "iPhone 12", price: 1000 },
            { id: 3, name: "galaxy s20", price: 1050 }
        ]
    );

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