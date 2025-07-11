import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductData from './ProductData';

const Product = () => {
    const productData = useLoaderData(); // Get the data directly

    return (
<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
              </div>
    </div>
    );
}

export default Product;