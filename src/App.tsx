

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthLayout from './Component/AuthLayout/AuthLayout'
import Login from './Component/Login/Login'
import MasterLayout from './Component/MasterLayout/MasterLayout'
import Home from './Component/Home/Home'
import UserList from './Component/UserList/UserList'
import AddUser from './Component/AddUser/AddUser'
import UpdateUser from './Component/UpdateUser/UpdateUser'
import Profile from './Component/Profile/Profile'
import NotFound from './Component/NotFound/NotFound'

function App() {
  const routs=createBrowserRouter([
    {path:'',element:<AuthLayout/>,children:[
      {index:true,element:<Login/>},
      {path:'login',element:<Login/>},
      {path:"*",element:<NotFound/>}
      
    ]},{path:'dashboard',element:<MasterLayout/>,children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'userlist',element:<UserList/>},
      {path:'adduser',element:<AddUser/>},
      {path:'updateuser',element:<UpdateUser/>},
      {path:'profile',element:<Profile/>},
      {path:"*",element:<NotFound/>}
    ]},

  ])

  return (
    <>
      <RouterProvider router={routs}/>
    </>
  )
}

export default App
