import './App.css'
import Keypad from "./keypad"
import { useState } from "react"


function App (){
  let [input, setInput] = useState("")

  function handleClick(value)
  {

  setInput(input + value)
     }
     function calculate(value){
      let outputVal = eval(input)
      setInput(outputVal)

     }
     function handleClear(){
      setInput("")
     }

  return(
  
    <div className="container">
         <h1> Claculator App using React</h1>
         <div className="calculator">
          <input type='text' value={input} className="output"/>
          <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear}></Keypad>
          
        

         </div>
    </div>
    
    

  )
}
export default App
