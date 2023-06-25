import { useNavigate, Link, Outlet } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
    <div className='h-3/5 flex justify-center items-center gap-4 flex-col border-2'>
        <h1 className='text-4xl text-blue-800' >Dashboard </h1>
        <p>(Private)</p>
        <button onClick={handleClick}>
            Back to Landing
        </button>
            <Link to='welcome' className='bg-white text-black p-2 rounded'>Say Welcomee</Link>
        <Outlet />
    </div>
  )
}

export default Dashboard