// import React,{useState} from 'react'

// const App = () => {
//   const[Data, setData] = useState(0)
//   return (
//     <div>
//       <h1>{Data}</h1>
//       <button onClick={() => setData(Data+1)}>Click Me</button>  
//     </div>
//   )
// }

// export default App
import React from 'react';
import Demo from './index.tsx'; 
import Demo2 from './index2.tsx';


function App() {
  return (
    <div className="App">
      <Demo />
      <hr />
      <Demo2 />
    </div>
  );
}


export default App