import React from 'react'

const ProductData = ({product}) => {

    const {title, category, price} = product;
    
  return (
    <div>
        {title}
    </div>
  )
}

export default ProductData