import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductData from './ProductData';

const Product = () => {
    const productData = useLoaderData(); // Get the data directly

    return (
        <div>
            {
                // Make sure productData is an array before mapping
                Array.isArray(productData) && 
                productData.map((product) => (
                    <ProductData 
                        key={product.id} // Always include a key when mapping
                        product={product} // Pass the product data to the component
                    />
                ))
            }
        </div>
    );
}

export default Product;