import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input type="email" id="email" />
            <label>Password:</label>
            <input type="password" id="password"></input>
            <button className='ok'>OK</button>
        </>
    )
}

export default Login