import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes
} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import NotFound from "./pages/NotFound";
import UsersPage from "./pages/UsersPage"
import Dashboard from './pages/Dashboard';

import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import User from './components/User';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<User />} />
        <Route path='/users/:id' element={<UsersPage />} />
        <Route path='/users2' element={<Navigate replace to='/users' /> } />

        <Route path='/dashboard/*' element={<Dashboard />} >
          <Route path='welcome' element={<h1>Welcome User!</h1>} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
