import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../featueres/User'
import {logout} from '../featueres/User'
const Login = () => {
    const dispatch=useDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch(login({name: "ayman", age: 24, email: "ayman@gmail.com"}))}}>Login</button>
            <button onClick={()=>{dispatch(logout())}}>logout</button>
        </div>
    )
}

export default Login
