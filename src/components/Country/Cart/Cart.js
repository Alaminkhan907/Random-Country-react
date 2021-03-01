import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopularion = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopularion = totalPopularion +country.population; 
    // }
    const totalPopularion =cart.reduce((sum,country)=>sum+country.population,0);
    return (
        <div>
            <h2>This Cart {cart.length}</h2>
            <p>Total Population :{totalPopularion } </p>
        </div>
    );
};

export default Cart;