import './App.css'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/',
      element: <PlayersPage /> 
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])
  return element;
}

export default App
