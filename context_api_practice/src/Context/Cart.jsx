import { createContext,useState } from "react";
import React from 'react';

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items,setItems] = useState([]);
    return (
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}