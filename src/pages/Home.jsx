import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className='h-20'>
      <h1 className='text-blue-800'>Aplication Home</h1>
      <Link to="/users">Users</Link>
    </section>
  )
}

export default Home