import React, { useState, useEffect } from 'react'

function Counter() {

    const [counter,setCounter] = useState(0)

    const increase = () => {
         setCounter(counter+1)
    }
    const decrease = () => {
          setCounter(counter-1);
    }
    const reset = () => {
        setCounter(0)
    }

    useEffect(() => {
      console.log("Güncel counter değeri: ", counter)
      if (counter < 0 ){
        alert("Negatif sayılara ulaştınız")
      }
    }, [counter])
  return (
    <div>
        <h1>sayaç:{counter}</h1>
        <button onClick={increase}> Arttır</button>
        <button onClick={decrease}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
    </div>
  )
}

export default Counter