import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='h-20 flex items-center justify-center'>
      <ul>
        <li>
          <NavLink className={({isActive}) =>(isActive ? 'text-red-600': '')} to='/about' >About link</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) =>(isActive ? 'text-red-600': '')} to='/' >Home</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar