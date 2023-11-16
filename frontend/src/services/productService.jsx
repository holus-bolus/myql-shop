import axios from "axios";
const API_URL = 'http://localhost:3000/api/products';

const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Ensure this is returning the actual products array
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Returning an empty array in case of an error
    }
};

export default fetchProducts;