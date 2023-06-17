import './App.css'
import { useRoutes } from 'react-router-dom' 
import CryptoDetailPage from './pages/CryptoDetailPage'
import HomePage from './pages/HomePage'

function App() {

  let element = useRoutes ([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/crypto/:coin',
      element: <CryptoDetailPage />
    },
    {
      path: "*",
      element: <HomePage />
    }
  ])

  return element;
}

export default App
