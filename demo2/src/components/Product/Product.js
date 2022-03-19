
const Product = (props) => {

    return (
        <div className="Content" onClick={props.setSelected}>
            <h3> {props.name}</h3>
            <div className="Field">
                {props.price}
            </div>
            <div className="Edit">
                <input
                    type="button"
                    value="Delete"
                    onClick={props.deleteProduct} />
            </div>

        </div>
    );
}

export default Product;

