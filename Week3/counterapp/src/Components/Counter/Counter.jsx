import styles from './Counter.module.css';
import { useState } from 'react';

// import React from 'react'

export default function Counter() {

    // let count = 0;
    const [count, setCount] = useState(0);

    //increment function
    const increment = () => {
        //count++; // We dont want to mutate  state directly
        // setCount(count + 1); // ORRR (code below)
        setCount((prevState) => prevState + 1); // can do it as an arrow function which is more preferred.
        console.log(count);
    }

    // decrement function
    const decrement = () => {
        //count--; // We dont want to mutate  state directly
        // setCount(count - 1);
        setCount((prevState) => prevState - 1);
    }
  return (
    <div className="Counter">
        <button onClick={increment} className={styles.buttonStyles}>Increment</button> 

        <span style={{padding: '20px'}}>{count}</span>

        <button onClick={decrement} className={styles.buttonStyles}>Decrement</button>
    </div>
  )
}
