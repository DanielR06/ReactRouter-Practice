import { useParams, Link } from "react-router-dom";

const UsersPage = () => {
    const { name }  = useParams();   

    return (
    <div className='h-3/5 border-2 flex justify-center items-center flex-col gap-8 text-center'> 
        <div>
            <h1 className='text-4xl text-blue-800'>UserPage</h1>
            <p>(Public)</p>
        </div>
        <div>
            <h2 className='text-2xl'>Your name is: {name}</h2>
            <p>from params url</p>
        </div>
        <Link to='/users' className='bg-white text-black p-2 rounded'>Back to</Link>
    </div>
  )
}

export default UsersPage