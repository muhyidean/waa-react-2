import Product from "../../components/Product/Product"

const Products = (props) => {

    const products = props.products.map(product => {
        return <Product
            name={product.name}
            price={product.price}
            id={product.id}
            key={product.id}

        />
    });
    return products;

}

export default Products;