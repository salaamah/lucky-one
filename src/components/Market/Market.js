import React, { useEffect, useState } from 'react';
import Ac from '../Ac/Ac';
import './Market.css';

const Market = () => {
    const [ac, setAc] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setAc(data))
    },[])

    return (
        <div>
            <h1>Welcome to our AC Shop</h1>
            <div className='product-container'>
                {ac.map((prod )=> <Ac key={prod.id} prod = {prod}></Ac>)}
            </div>  
                
        </div>
    );
};

export default Market;