import React, { useEffect, useState } from 'react';
import Ac from '../Ac/Ac';
import Cart from '../Cart/Cart';
import './Market.css';

const Market = () => {
    const [ac, setAc] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setAc(data))
    },[]);
    const [cart, setCart] = useState([]);
    const addToCart = (prod) =>{
        const newCart =[...cart, prod];
        setCart(newCart);
    }

    return (
        <div>
            <h1>Welcome to our AC Shop</h1>
            <div className='shop'>
                <div className='product-container'>
                    {ac.map((prod )=> <Ac key={prod.id} addToCart={addToCart} prod = {prod}></Ac>)}
                </div> 
                <div>
                    <Cart cart = {cart}></Cart>
                </div> 
            </div>
                
        </div>
    );
};

export default Market;