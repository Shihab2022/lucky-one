import React from 'react';
import './SingleProduct.css'
import {FaShopify} from 'react-icons/fa';
const SingleProduct = ({product}) => {
    const {name,picture,price}=product;
    // console.log(id)
    // console.log(product)
    return (
        <div className="col-md-4 ">
        <div class="card my-3  d-flex align-items-center justify-content-center py-4 px-2 rounded-3 box-shadow border-0">
            <img src={picture} class="card-img-top h-100 w-75 rounded-3" alt="" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h5 class="card-title">Price: ${price}</h5>
               <button class="btn details-btn mt-3 px-3 py-2 ">Add to card  <span className="btn-icon"><FaShopify /></span></button>
              
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;