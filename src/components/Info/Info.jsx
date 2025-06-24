import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Info = () => {

  const moreInfo = useLoaderData();
  const {title, category, price, image} = moreInfo;
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default Info