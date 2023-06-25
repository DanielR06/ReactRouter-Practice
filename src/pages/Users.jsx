import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Users = () => {
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()

  const type = (e) =>{
    setUserName(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    navigate(`/users/${userName}`)
  }
  return (
    <div className='h-3/5 border-2 flex justify-center items-center flex-col text-center gap-8'>
        <div>
          <h1 className='text-4xl text-blue-800'>Users</h1>
          <p>(Public)</p>
        </div>
        <form onSubmit={submit}>
          <input type="text" placeholder="Type your name" onChange={type} value={userName}/>
        </form>

    </div>
  )
}

export default Users