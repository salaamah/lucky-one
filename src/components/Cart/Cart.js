import React from 'react';

const Cart = ({cart}) => {
    
    let c1 = false;
    

    return (
        <div>
            <h4>Selected Items</h4>
    
            {
            
                cart.map(item => <li>{item.name}</li>)
            }

            <button >Choose Item</button>
            <br></br>
            <button >Reset All</button>
        </div>
    );
};

export default Cart;