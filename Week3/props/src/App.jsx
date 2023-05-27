//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Country from './components/Country'

export default function App() {

  return (
    <div className="App">
      <Country cityName="Vancouver" image="https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" title="Canada"/>
      <Country cityName="Los Angeles" image="https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" title="U.S."/>
    </div>
  )
}


