import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
// import { getToken } from '../hooks/Auth'


const useUserRoutes = () => {
    // const token = useGetToken()
   const auth =   window.localStorage.getItem('token')
  
    // const auth = {'token': true}
  return (
    auth? <Outlet /> : <Navigate  to ='/' />
  )
}

export default useUserRoutes