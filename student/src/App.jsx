import React from 'react'
import AppRoutes from './components/utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL =''
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>  
  </>
}

export default App