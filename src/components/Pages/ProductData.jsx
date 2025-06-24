import React from 'react'
import { Link } from 'react-router-dom';

const ProductData = ({product}) => {

    const {id, title, category, price, image} = product;
    
  return (
    <div>
      <img src={image} alt="" />
      <h2 className=''>{title}</h2>
      <Link to={`/product/${id}`}>Read More</Link>
    </div>
  )
}

export default ProductData