

// ---------------------------UseMemo
import { useMemo, useState } from 'react';
import React from 'react';
import './App.css';

import { initialItems } from './utils.tsx';

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items],
  );

  return (
    <div className='tutorial'>
        <h2>Task 1 (UseMemo Hook)</h2>
      <h1 id="mainheading">Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button   onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Demo;