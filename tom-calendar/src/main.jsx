import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Calendar from './Calendar.jsx'
import DayPage from './DayPage.jsx'
import PageNotFound from './PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Calendar />,
    errorElement: <PageNotFound />,
  },
  {
    path:'day',
    element: <DayPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
