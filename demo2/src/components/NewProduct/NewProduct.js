import { useState } from "react";
import './NewProduct.css';
const NewProduct = (props) => {



    return (
        <div className="NewProduct">
         
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                    onChange={props.onChange}
                    value={props.name}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                    onChange={props.onChange}
                    value={props.price}
                />

                <button onClick={props.addButtonClicked}>Add Product </button>
        </div>
    );

}

export default NewProduct;