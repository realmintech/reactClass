import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
      const { id } = useParams()
      const [product, setProduct] = useState([])

     useEffect(()=>{
        const fetchById = async() =>{
            let res = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(res);
            setProduct(res.data)
        }
        fetchById()
     }, [id])
  return (
    <>
        <div>
          <img src={product.images} alt="products" />
          <p>{product.brand}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
    </>
  );
}

export default ProductDetails