import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      {/* <Route 
      loader={githubInfoLoader}
      path='github' element={<Github />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
