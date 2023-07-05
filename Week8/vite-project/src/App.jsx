
import { useState } from 'react'
import './App.css'
import Child from './ChildComponent/Child'

function App() {

  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(10);
  const [array, setArray] = useState()

  const increment =() => {
    setParentCount(parentCount + 1);
  }

  return (
    < div className='App'>

      <p>{parentCount}</p>
      <button onClick={increment}>Increment Parent</button>

      <hr/>

      <Child updateChildCounter={(valueFromChild) => setChildCount(valueFromChild) } childCount={childCount}/>
      
      <h1>
        MAXIMUM VALUE: {memo}
      </h1>

      <button onClick={() => setArray=([2, 3, 20, 100])}>Change Array</button>
    </div>
  )
}

export default App
