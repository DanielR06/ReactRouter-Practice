// eslint-disable-next-line react/prop-types
const SessionBotton = ({user, login, logout}) => {
  return (
  <>
    {
        user ? (
        <button onClick={logout} className='bg-red-300 text-black p-2 rounded'>Logout</button>
        ) : (
        <button onClick={login} className='bg-cyan-300 text-black p-2 rounded'>Login</button>
        )
      }
  </>
  )
}

export default SessionBotton