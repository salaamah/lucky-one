import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Selected Items</h4>
            {
                cart.map(item => <li>{item.name}</li>)
            }

            <button onClick={choose1}>Choose Item</button>
            <button onClick={removeAll}>Reset All</button>
        </div>
    );
};

export default Cart;