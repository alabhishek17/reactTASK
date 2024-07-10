import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import INDEX from './componets/index.jsx'
import ADDFUNCTION from './componets/addfunction.jsx'
import RETRIEVE from './componets/retrieve.jsx'

const Mainjs=()=>{
 return(
  <>
  
    <INDEX/>
    <Outlet/>
 
  </>
 )
}

const routerA=createBrowserRouter([
  {
     path:"/",
     element:<Mainjs/>,
     children:[
      {
        path:"/index",
        element:<INDEX/>
      },{
        path:"/addfunction",
        element:<ADDFUNCTION/>
      },
      {
        path:"/retrieve",
        element:<RETRIEVE/>
      }
     ]
  }
])
const roote = ReactDOM.createRoot(document.getElementById("root"))
  
    roote.render(<RouterProvider router={routerA}/>)