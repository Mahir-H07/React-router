

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider  } from "react-router";
import Home from './Components/Home.jsx';
import Rootlayout from './Components/Rootlayout.jsx';
import Products from './Components/Products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
   Component : Rootlayout,
   children: [

    {
      path : '/home',
      element: <div>
        <h1> This is home</h1>
      </div>
    },


    {
        path : "/products", 
        element : <Products></Products>,
        loader : () => fetch('doctors.json')
      }

   ]
   
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
