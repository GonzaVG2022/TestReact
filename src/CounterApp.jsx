import  PropTypes  from "prop-types";
import { useState } from "react";

export const CounterApp = ({value}) => {
  
  const [counter, setCounter] = useState(value);
  const sumar = () => 
    setCounter( counter + 1 )
  
  const restar = () => 
    setCounter( counter - 1 )
  
  const reset = () => 
    setCounter( value )
  
  return (
    <>
    <h1>CounterApp</h1>
    {/* <h2> { value } </h2> */}
    <h1>{counter}</h1>

    <button 
      aria-label="sumar"
      onClick={sumar}
    >
      +1
    </button>
    <button 
      onClick={restar}
    >
      -1
    </button>
    <button 
      onClick={reset}
    >
      Reset
    </button>
    
    </>
  )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
