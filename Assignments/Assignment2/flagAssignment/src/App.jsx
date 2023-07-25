
import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import FlagDetailPage from './pages/FlagDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/flag/:country',
      element: <FlagDetailPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return element;
}

export default App
