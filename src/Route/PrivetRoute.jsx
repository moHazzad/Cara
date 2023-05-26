import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthProviders/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

function PrivetRoute({children}) {
const {user, loading } = useContext(AuthContext)
const location = useLocation()

if(loading){
    <progress className="progress w-56"></progress>
}

if(user){
    return children;
}

  return (
    <Navigate to={'/login'} state={ location} replace  />
  )
}

export default PrivetRoute