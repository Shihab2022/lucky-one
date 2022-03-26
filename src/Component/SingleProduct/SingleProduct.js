import React from 'react';
import './SingleProduct.css'
const SingleProduct = () => {
    return (
        <div className="col-md-3 ">
        <div class="card my-3  d-flex align-items-center justify-content-center py-4 px-2 rounded-3 box-shadow border-0">
            <img src='{image} ' class="card-img-top h-75 w-50" alt="" />
            <div class="card-body">
                <h5 class="card-title">phone_name</h5>
                <h5 class="card-title">brand</h5>
               <button class="btn details-btn mt-3 px-3 py-2">Details</button>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;