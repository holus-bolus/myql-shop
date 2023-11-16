import React from 'react';


const Product = ({ product }) => {
    return (
        <div className="card my-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold">Price: ${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Product;
