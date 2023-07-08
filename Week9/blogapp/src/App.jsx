import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInPage from './pages/Signin'
import HomePage from './pages/Home'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <SignInPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
  ])

  return element;
}

export default App
