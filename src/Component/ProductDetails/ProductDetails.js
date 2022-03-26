import React from 'react';
import './ProductDetails.css'
import {FaRegWindowClose} from 'react-icons/fa';
const ProductDetails = ({data}) => {
    const {name,picture}=data;
    return (
        <div className='  '>

           
        <div className='show-details py-2'>
                    <img src={picture} alt="" />
                    <p className='mt-2'>{name}</p>
                    <span className="delete-btn"> <FaRegWindowClose/></span>
                </div>
               
                </div>
    );
};

export default ProductDetails;