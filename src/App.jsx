import React from 'react'
import Topbar from './components/topbar/Topbar'
import "./App.css"
import Sidebar from './components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import UserList from "./pages/users/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newuser/NewUser"
import ProductList from "./pages/products/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newproduct/NewProduct"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
const App = () => {
  return (
   <>
   <Router>
      <Topbar/>
      <div className='container'>
          <Sidebar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route path='/users/:userid' element={<User/>}/>
          <Route path='/newuser' element={<NewUser/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/product/:productid' element={<Product/>}/>
          <Route path='/newproduct' element={<NewProduct/>}/>


         </Routes>
      </div>
      </Router>
      </>
  )
}

export default App