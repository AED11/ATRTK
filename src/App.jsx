import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Todolist from './pages/todolist/todolist'
import TodolistById from './pages/todolistById/todolistById'
import Login from './pages/login/login'


const App = () => {
  let router = createBrowserRouter([
    {
      path : 'login', 
      element: <Login />
    }, 
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <Todolist />,
          index: true
        },
        {
          path : 'todolist/:id',
          element: <TodolistById />
        }
      ]
    }

  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App