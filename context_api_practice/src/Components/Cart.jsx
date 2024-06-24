

// import React, { useContext } from 'react';
// import { CartContext } from '../Context/Cart';

// const Cart = () => {
//     const { items } = useContext(CartContext);

//     // Ensure items is always an array
//     const cartItems = Array.isArray(items) ? items : [];

//     // Calculate the total price
//     const total = cartItems.reduce((acc, item) => acc + item.price, 0);

//     return (
//         <div className='cart'>
//             <hr />
//             <h1>Cart Items</h1>
//             {cartItems.length > 0 ? (
//                 <ul>
//                     {cartItems.map((item, index) => (
//                         <li key={index}>
//                             {item.name} - ${item.price}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No items in the cart</p>
//             )}
//             <hr />
//             <h5>Total Bill: ${total}</h5>
//         </div>
//     );
// };

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';
import '../Cart.css'; // Add a separate CSS file for Cart component styling

const Cart = () => {
    const { items } = useContext(CartContext);

    const cartItems = Array.isArray(items) ? items : [];
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='cart'>
            <hr />
            <h1>Cart Items</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in the cart</p>
            )}
            <hr />
            <h5>Total Bill: ${total}</h5>
        </div>
    );
};

export default Cart;
