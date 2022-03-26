import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({data}) => {
    console.log(data)
    const {name,picture}=data;
    return (
        <div className=' details-product rounded-3'>

            <h3 className='py-3'>Your Selected Food</h3>
           <div className='show-details'>
               <h3>hello</h3>
               <p>{name}</p>
               <span>icon</span>
           </div>
        <button>hello</button>
        </div>
    );
};

export default ProductDetails;