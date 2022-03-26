import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="my-4">
           <h1 className='fw-3'>FAST <span className='text-info'>FOOD </span> <span>RESTAURANT</span></h1> 
           <h4>Restaurant . <span className="text-danger">Open</span></h4>
        </div>
    );
};

export default Header;