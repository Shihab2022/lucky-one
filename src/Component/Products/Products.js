import { useEffect, useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])
const [cart,setCart]=useState([])
  
// click card button add data

    const selectedProduct=(id)=>{
        const selectProduct=products.find(product=>product.id===id)
        const newProduct=[...cart,selectProduct]
        setCart(newProduct)

    }
//delite all data

const deleteData=()=>{
    setCart([])
}

// Choose one randomli

const chooseRandom=()=>{
 
// if(cart.length >0){
    const ranNumber= (Math.round(Math.random()*cart.length)) ;
    const findProduct=cart.find(data => parseFloat(data.id )===ranNumber);
    if(findProduct){
 setCart([findProduct ])
    }
   
 else{
     alert('Please try again')
 }



}
   //data fetch

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
             <div className="row responsive">
             {
            products.map(product => <SingleProduct product={product} key={product.id} selectedProduct={selectedProduct}></SingleProduct>)

            }
    
            </div> 
            </div>
        <div className="col-md-3 ">
    <div className="details-product rounded-3">
    <h3 className='py-3'>Your Selected Food</h3>
    {
          cart.map(data=><ProductDetails data={data} key={data.id}></ProductDetails>)
      }
        <div className="product-btn py-3">
         
                <button onClick={chooseRandom} className="btn details-btn mt-3 px-3 py-2 ">Choose 1 For Me</button>
                <button onClick={deleteData}  className="btn details-btn mt-3 px-3 py-2 ">Choose Again</button>
        </div>

    </div>
    

        </div>

            </div>
        </div>
    );
};

export default Products;