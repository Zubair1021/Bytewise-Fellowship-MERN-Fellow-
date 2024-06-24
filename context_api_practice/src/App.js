
// -----------------------------------Increment/Decrement Counter Task-----------------------------------
// import './App.css';
// import Counter from './Components/Counter';
// import { useContext } from 'react';
// import { CounterContext } from './Context/Counter';

// function App() {

//   const counterState = useContext(CounterContext);
//   console.log(counterState);
//   return (
//     <div className="App">
//       <h1>Count is {counterState.count}</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// export default App;

import Item from './Components/Item';
import Cart from './Components/Cart';
import './App.css';



const App = () => {
  return (
    <div className='App'>
      <Item name="MacBook Pro" price={100000}/>
      <Item name="Apple Ports" price={500}/>
      <Item name="Apple Pen Drive" price={300}/>
       <Cart />
    </div>
  )
}

export default App