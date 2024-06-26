
// ---------------------------UseCallback

import React, { useCallback, useState } from 'react';
import './App.css';

import Search from './Search.tsx';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

export default function Demo2() {
  const [myList, setMyList] = useState([...allUsers]); // Moved inside the component

  const handleShuffleClick = () => {
    const shuffledList = [...myList]; // Use myList directly
    shuffleList(shuffledList);
    setMyList(shuffledList);
  };

  const handleSearch = useCallback(
    (text) => {
      const filteredUsers = myList.filter((user) => user.includes(text));
      setMyList(filteredUsers); // Update myList directly
    },
    [], // Removed dependency on users since we're updating myList directly
  );

  return (
    <div className='tutorial2'>
      <div className='align-center mb-2 flex'>
        <h2>Task 2 (UseCallBack Hook)</h2>
        <button onClick={handleShuffleClick}>Shuffle List</button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {myList.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

function shuffleList(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}
