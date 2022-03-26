import { useEffect, useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(() =>{
  
  fetch('fakeData.json')
  .then(response =>response.json())
  .then(data=>setProducts(data))
  
  
    },[])
    // console.log(products)
    return (
        <div className="container">
            <div className="row">
        <div className="col-md-9">
             <div className="row">
             {
            products.map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)

            }
    
            </div> 
            </div>
        <div className="col-md-3">


        </div>

            </div>
        </div>
    );
};

export default Products;