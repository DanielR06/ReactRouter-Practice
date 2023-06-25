import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='h-20 flex items-center justify-center'>
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
      </ul>
    </nav>
  )
}

export default Navbar