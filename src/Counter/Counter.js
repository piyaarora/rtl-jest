import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [inputVal, setInputVal] = useState(1)

    const addToCounter = () => {
        setCounter(counter + inputVal)
    }
    const subtractFromCounter = () => {
        setCounter(counter - inputVal)
    }
    return (
        <div>
            <h3 data-testid="header">My Counter</h3>

            <h2 data-testid="counter"
                className={`${counter >= 100 ? "green" : ""}${counter <= -100 ? "red" : ""}`}
            >{counter}</h2>
            <button data-testid="minus-btn" onClick={subtractFromCounter}>-</button>
            <input data-testid="input"
                value={inputVal}
                type="number"
                className="text-center"
                onChange={(e) => {
                    setInputVal(parseInt(e.target.value))
                }}
            />
            <button data-testid="add-btn" onClick={addToCounter}>+</button>
        </div>
    )
}

export default Counter
