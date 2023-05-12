import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Quiz from './Quiz'
import Bingo from './Bingo'
import FAQ from './FAQ'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/bingo',
        element: <Bingo />,
      },
      {
        path: '/',
        element: <Bingo />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
