import { useState } from 'react';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//Pages  
import Home from './pages/Home';
import Landing from './pages/Landing';
import NotFound from "./pages/NotFound";
import UsersPage from "./pages/UsersPage"
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Admin from './pages/Admin';
import Users from './pages/Users';
//Components  
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import SessionBotton from './components/SessionBotton';

const App = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    //request done
    setUser({
      id:1,
      name: 'Daniel',
      permissions: ['analize'],
      roles: ['admin']
    })
  }

  const logout = () => {
    setUser(null)
  }
  return (
  <BrowserRouter >
    <Navbar>
      <SessionBotton user={user} login={login} logout={logout} />
    </Navbar>
    
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route element={<ProtectedRoute isAllow={!!user}/>}>
        <Route path='/home' element={<Home/>} />
        <Route path='/dashboard/*' element={<Dashboard />}>
          <Route path='welcome' element={<h1>Welcome!</h1>} />
        </Route>
      </Route>
      

      <Route path='/analytics' element={
        <ProtectedRoute 
        isAllow={!!user && user.permissions.includes('analize')}
        redirecTo='/home'
        >
          <Analytics />
        </ProtectedRoute>
      } />

      <Route path='/admin' element={
        <ProtectedRoute 
        isAllow={!!user && user.roles.includes('admin')}
        redirecTo='/home'
        >
          <Admin />
        </ProtectedRoute>
      } />

      <Route path='/users' element={<Users />} />

      <Route path='/users/:name' element={<UsersPage />} />
      <Route path='/users2' element={<Navigate replace to='/users' /> } />


      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App