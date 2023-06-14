import axios from "axios";
import { useState , useRef, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { fetchService } from "../../services/fetchServices";
import './NewProduct.css';

const NewProductHook = (props) => {


    const newProductForm = useRef();

    
    
    const [price, setPrice] = useLocalStorage('price','0')

    const ProductHandler = () =>{
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        };

        console.log(data);

        fetchService.post("products",data);
        props.click();
    }

    useEffect(  ()=> {
        newProductForm.current['name'].value= "Dean";
    } , []);

    return (
        <div className="NewProduct">
            With Ref
         <form ref={newProductForm}>
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Price</label>
                <input  type="text"
                    label={'price'}
                    name={'price'}
                    onChange={e => setPrice(e.target.value)}
                />
                </form>
                <button onClick={ProductHandler}>Add Product </button>
        </div>
    );

}

export default NewProductHook;