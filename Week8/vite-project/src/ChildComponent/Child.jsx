import React from 'react'
import { memo } from 'react'

function Child(props) {
    console.log("hi")

    //

    const incrementChild = () => {
        props.updateChildCounter(Math.random());
    }
  return (
    <div>
        <p>{props.childCount}</p>
        <button onClick={incrementChild}>Increment for Child</button>
    </div>
  )
}

export default memo(Child)



