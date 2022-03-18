
const Product = (props) => {

    return (
        <div className="Content" onClick={props.setSelected}>
            <h1> {props.name}</h1>
            <div className="Field">
                {props.price}
            </div>
            <input 
                type="button" 
                value="Delete"
                onClick={props.deleteProduct} />
        </div>
    );
}

export default Product;

