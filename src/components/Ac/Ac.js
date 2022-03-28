import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Ac.css';
const Ac = (props) => {
    const {img, name, price} = props.prod;
    return (
        <div className='product'>
            <img src={img}></img>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={()=>props.addToCart(props.prod)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Ac;