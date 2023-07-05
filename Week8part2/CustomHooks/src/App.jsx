import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// We want to call an api from a custom that we will make.

function App() {
  //const [count, setCount] = useState(0)
  const {data, isLoading, error} = useFetch('https:??reqres.in/api/users');

  function renderUsers() {
    console.log(data, 'output');
    return data.data.map((users) => {
      return <h1>{users.first_name}</h1>
    })
  }

  return (

    <div className='App'>
      {
        isLoading ? <h1>LOading...</h1> : renderUserS()
      }
    </div>
  )
}

export default App
