
import { useRoutes } from 'react-router-dom'
import './App.css'
import FlagDetailPage from './pages/FlagDetailPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  // This how you can go from page to page 
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/name/:country',
      element: <FlagDetailPage />
    },
    {
      path: '*',
      element:  <NotFoundPage />
    }
  ])
  return element;
}

export default App
