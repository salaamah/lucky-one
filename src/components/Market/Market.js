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
    const emptyCart = () =>{
        const newCart = [];
        setCart(newCart);
    }
    const choose1 = () =>{
        const n = Math.floor(Math.random()*(cart.length));
        const singleItem = [];
        singleItem.push(cart[n]);
        setCart(singleItem);
    }

    return (
        <div>
            <h1>Welcome to our AC Shop</h1>
            <div className='shop'>
                <div className='product-container'>
                    {ac.map((prod )=> <Ac key={prod.id} addToCart={addToCart} prod = {prod}></Ac>)}
                </div> 
                <div>
                    <Cart cart = {cart} emptyCart = {emptyCart} choose1 = {choose1}></Cart>
                </div> 
            </div>
                
        </div>
    );
};

export default Market;