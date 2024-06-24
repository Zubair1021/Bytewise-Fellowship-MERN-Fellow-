import React, { useState } from 'react';
import { createContext } from "react";


export const CounterContext = createContext(null);

export const CounterProvider = (prop) => {
    const [count,setCount] = useState(5);
  return (
    <CounterContext.Provider value={{ count ,setCount, name: "M.Zubair"}}>
      {prop.children}
    </CounterContext.Provider>
  );
}  