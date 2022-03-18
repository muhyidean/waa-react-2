import axios from "axios";
import { useState , useRef} from "react";
import './NewProduct.css';
const NewProduct = (props) => {


    const newProductForm = useRef();

    const ProductHandler = () =>{
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        };
        console.log(data);
        axios.post('http://localhost:8080/api/v1/products', data)
        .then(data => {
            console.log('Success', data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
    }
    return (
        <div className="NewProduct">
         <form ref={newProductForm}>
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />
                </form>
                <button onClick={ProductHandler}>Add Product </button>
        </div>
    );

}

export default NewProductHook;