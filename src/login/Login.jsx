import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

    let username = useRef();
    let password = useRef();

    function submitdata(e) {
        e.preventDefault()
        if (username.current.value == "jignesh" && password.current.value == "12345") {
            window.location.href = 'http://localhost:3000/product';
        }
        else {
            alert("Invalid Username or Password")
        }
        console.log(username.current.value,password.current.value);
    }


    return (
        <>
            <form class="login" onSubmit={submitdata}>
                <h2>Welcome, User!</h2>
                <p>Please login</p>
                <input type="text" placeholder="User Name" ref={username} />
                <input type="text" placeholder="Password" ref={password} />
                <input type="submit" value="LogIn"/>
                <div class="links">
                    <button href="#">Forgot password</button>
                    <Link to={'/Signup'} >Sign up</Link>
                </div>
            </form>
        </>
    )
}

export default Login