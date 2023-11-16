import './App.css'
import {useEffect, useState} from "react";
import fetchProducts from "./services/productService.jsx";
import Product from "./components/Product.jsx";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const fetchedProducts = await fetchProducts()
            setProducts(fetchedProducts);
        };

        getProducts();
    }, []);

    return (
        <div>
            {products && products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default App
