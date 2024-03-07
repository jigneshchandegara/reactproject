import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <form class="login">
                <h2>Welcome, User!</h2>
                <p>Please Sign up</p>
                <input type="email" placeholder="User Email" />
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Log In" />
                <div class="links">
                    <button href="#">Forgot password</button>
                    <Link to={'/'} >Login </Link>
                </div>
            </form>
        </>
    )
}

export default Signup