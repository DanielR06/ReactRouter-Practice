import { useParams } from "react-router-dom";


const Users = () => {
    const { id }  = useParams();   

    return (
    <div className='border-2'> 
        <h2>Name: Daniel Rodriguez</h2>
        <p>
            I am nineteen years old
            This id is {id}
        </p>
    </div>
  )
}

export default Users