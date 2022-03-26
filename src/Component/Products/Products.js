import { useEffect, useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [data,setData]=useState([])

    useEffect(() =>{
  
  fetch('fakeData.json')
  .then(response =>response.json())
  .then(data=>setData(data))
  
  
    },[])
    console.log(data)
    return (
        <div className="bg-info">
            
<SingleProduct></SingleProduct>
            from products
        </div>
    );
};

export default Products;