import './App.css';
import React from 'react'
import SearchTodos from './TodoList';
import SearchUser from './UserList';

const App = () => {
  return (
    <div className='Main'>
      <h1>Higher Order Components (HOC) in React</h1>
      <div className='sections'>
        <div><SearchUser /></div>
        <hr />
        <div><SearchTodos /></div>
        
      </div>
    </div>
  )
}

export default App