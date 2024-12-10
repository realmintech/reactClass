import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
   const handleStorage = (product) => {
     localStorage.setItem(`${product.id}`, JSON.stringify(product));
    //  localStorage.clear()
   };
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://dummyjson.com/products");
      // console.log(res)
      setItem(res.data.products);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        {item.length > 0 ? (
          item.map((goods, index) => (
            <div key={index} className="card">
              <img src={goods.images[0]} alt="products" />
              <p>{goods.brand}</p>
              <p>{goods.description}</p>
              <p>{goods.price}</p>
              <button onClick={() => handleStorage(goods)}>Add to cart</button>
              <button onClick={() => navigate(`/product/${goods.id}`)}>
                View Description
              </button>
            </div>
          ))
        ) : (
          <div>
            <div className="spinner-grow text-lemon" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
