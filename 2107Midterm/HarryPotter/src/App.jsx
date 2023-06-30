import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Gryffindor from './pages/Gryffindor/Gryffindor'
import Hufflepuff from './pages/Hufflepuff/Hufflepuff'
import Ravenclaw from './pages/Ravenclaw/Ravenclaw'
import Slytherin from './pages/Slytherin/Slytherin'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/gryffindor',
      element: <Gryffindor />
    },
    {
      path: '/hufflepuff',
      element: <Hufflepuff />
    },
    {
      path: '/ravenclaw',
      element: <Ravenclaw />
    },
    {
      path: '/slytherin',
      element: <Slytherin />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return element;
}

export default App
