
// import React, { useContext } from 'react';
// import { CartContext } from '../Context/Cart';
// import '../App.css';

// const Item = ({ name, price }) => {
//     const { items, setItems } = useContext(CartContext);

//     const addToCart = () => {
//         // Ensure items is always an array before updating
//         setItems([...items, { name, price }]);
//     };

//     return (
        
//         <div className='items'>
//             <h2>{name}</h2>
//             <p>Price: ${price}</p>
//             <button onClick={addToCart}>Add to Cart</button>
//         </div>
//     );
// };

// export default Item;

import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';
import '../item.css'; // Add a separate CSS file for Item component styling

const Item = ({ name, price }) => {
    const { items, setItems } = useContext(CartContext);

    const addToCart = () => {
        // Ensure items is always an array before updating
        setItems([...items, { name, price }]);
    };

    return (
        <div className='item'>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Item;

