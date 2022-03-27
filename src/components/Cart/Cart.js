import React from 'react';

const Cart = (props) => {
    const {cart, emptyCart, choose1} = props;
    
    // const emptyCart = () =>{
    //     cart = [];
    //     document.getElementById('cart-items').innerHTML = ``;
    // }
    return (
        <div >
            <h4>Selected Items</h4>

            <div id='cart-items'>
            {               
                cart.map(item => <li>{item.name}</li>)
            }
            </div>
            

            <button onClick={choose1}>Choose Item</button>
            <br></br>
            <button onClick={emptyCart} >Reset All</button>
        </div>
    );
};

export default Cart;