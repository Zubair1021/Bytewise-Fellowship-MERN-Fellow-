import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
          <h1 style={{ 
      color: 'blue', 
      fontSize: '24px', 
      textAlign: 'center',
      margin: '20px',
      fontWeight: 'bold',
      fontSize:35,
    }}>
      Learn about Redux Toolkit
    </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App