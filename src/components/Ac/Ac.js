import React from 'react';
import './Ac.css';
const Ac = (props) => {
    const {img, name, price} = props.prod;
    return (
        <div className='product'>
            <img src={img}></img>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={()=>props.addToCart(props.prod)} className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Ac;