import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import FlagDetailPage from './pages/FlagDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { useRoutes } from 'react-router-dom';

function App() {
  // useRoutes to go to other pages

  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/flag/:flag',
      element: <FlagDetailPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])

  return element;
}

export default App

