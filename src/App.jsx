import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard';
import Logout from './Admin/Logout';

const App = () => {
  return (
    <main className='md:w-full h-[400px] container mx-auto'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/cart' element={<Cart />} />
        <Route  path='/Admin/Login' element={<Login /> } />
        <Route  path='/Admin/Dashboard' element={<Dashboard /> } />
        <Route  path='/Admin/Logout' element={<Logout /> } />
      </Routes>
    </main>

  )
}

export default App