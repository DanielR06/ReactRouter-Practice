import {NavLink} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <nav className='h-1/5 flex items-center justify-center gap-8'>
      <ul className='flex gap-4'>
        <li>
          <NavLink className={({isActive}) =>(isActive ? 'text-red-600': '')} to='/' >Landing</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive}) =>(isActive ? 'text-red-600': '')} 
            to='/home' >Home</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive}) =>(isActive ? 'text-red-600': '')} 
            to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive}) =>(isActive ? 'text-red-600': '')} 
            to='/analytics' >Analytics</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive}) =>(isActive ? 'text-red-600': '')} 
            to='/admin' >Admin</NavLink>
        </li>
        <li>
          <NavLink 
            className={({isActive}) =>(isActive ? 'text-red-600': '')} 
            to='/users' >Users</NavLink>
        </li>
      </ul>
      {children}
    </nav>
  )
}

export default Navbar