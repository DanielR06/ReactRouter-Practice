import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAllow, redirecTo='/', children  }) => {
    if(!isAllow){
        return <Navigate to={redirecTo} />
    }
  return children ? children : <Outlet />
}

export default ProtectedRoute