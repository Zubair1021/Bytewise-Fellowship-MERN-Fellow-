
// ---------------------------UseCallback


import { memo } from 'react';
import React from 'react';
import './App.css';

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log('Search rendered!');

  return (
    <div className='Seacrh-input'>
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
    />
    </div>
  );
}

export default memo(Search);