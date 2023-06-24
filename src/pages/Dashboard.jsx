import { useNavigate, Link, Outlet } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleClick}>
            Logout
        </button>
        <Link to='welcome' >Say Welcomee</Link>
        <Outlet />
    </div>
  )
}

export default Dashboard