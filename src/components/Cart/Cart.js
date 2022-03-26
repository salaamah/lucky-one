import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Selected Items</h4>
            props.map();
        </div>
    );
};

export default Cart;