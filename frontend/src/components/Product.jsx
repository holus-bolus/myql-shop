import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price : ${product.price.toFixed(2)}</p>
        </div>
    );
};

export default Product;
