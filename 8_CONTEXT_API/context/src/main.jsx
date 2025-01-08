import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './routes/Home'
import Contact from './routes/Contact'

// 2 - criando o provider
import { CounterContextProvider } from './context/CounterContext'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <RouterProvider router={router}/>
    </CounterContextProvider>
  </StrictMode>,
)
