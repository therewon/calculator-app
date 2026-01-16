import { useState } from 'react'

import './App.css'

function App() {
  const [result,setResult] = useState('')

  const buttons = [
  "1", "2", "3","+", "4",
  "5", "6","-", "7", "8", "9","*",
   "C","0","=","/"
];

const handleClick = (value) => {
    if (value === "C") {
      setResult("");
    } 
    else if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error");
      }
    } 
    else {
      setResult(prev => prev + value);
    }
  };
  return (
    <>
      <h1>Calculator App</h1>
      <div className='container'>
        <div className='screen'>{result}</div>
        <div className='buttons'>
          {
            buttons.map((e)=>{
              return (
                <button key={e} onClick={()=> handleClick(e)}>{e}</button>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
