import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function ProtectedRouter() {

    if (!localStorage.getItem("userData")) {
        return <Navigate to='/login' />
    }
else{
    return <Outlet/>
}
}

export default ProtectedRouter