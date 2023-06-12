import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';


import "./Login.css"

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const { login, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);

    }

    return (


        <section className='login-form' style={{ backgroundColor: "#666666" }}>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">


                            <span className="login100-form-title p-b-43">
                                Login to UnMask
                            </span>



                            <div className="wrap-input100 " >
                                <input
                                    className="input100"
                                    placeholder='email'
                                    type="text"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    value={email}
                                    name="email" />
                            </div>


                            <div className="wrap-input100 ">
                                <input
                                    className="input100"
                                    placeholder='password'
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    name="pass" />

                            </div>


                            {error && <div className='error'>{error}</div>}


                            {/* FORGOT PASSWORD SECTION */}

                            <div className="forgot">
                                <div>
                                    <a href="/signUp">
                                        Dont have a account ? <span style={{ color: "red" }}>Sign Up</span>
                                    </a>
                                </div>
                            </div>

                            {/* LOGIN BUTTON */}

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>


                        </form>

                        {/* BACKGROUND IMAGE HERE */}
                        <div className="login100-more" >
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login


