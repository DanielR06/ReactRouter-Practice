import { Link } from "react-router-dom"

const Home = () => {  
  return (
    <section className='h-3/5 border-2 flex justify-center items-center flex-col gap-8 text-center'>
      <div>
        <h1 className='text-4xl text-blue-800'>Home </h1>
        <p>(Private)</p>
      </div>
      <Link to="/users">Users</Link>
    </section>
  )
}
export default Home