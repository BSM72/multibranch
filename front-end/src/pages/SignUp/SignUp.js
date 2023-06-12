import React, { useState } from 'react'

import { useSignUp } from '../../hooks/useSignUp';

import "./signUp.css"

function SignUp() {

    // state variables for form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    // our custom hook
    const { signup, error } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Email : ", email);
        console.log("Password : ", password);

        await signup(email, password, userName);

        setEmail("");
        setPassword("");
        setUserName("");
    }

    return (
        <section className='signUp-form' style={{ backgroundColor: "#666666" }}>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">


                            <span className="login100-form-title p-b-43">
                                Register to UnMask
                            </span>


                            <div className="wrap-input100 " >
                                <input
                                    className="input100"
                                    placeholder='Name'
                                    type="text"
                                    onChange={(e) => { setUserName(e.target.value) }}
                                    value={userName}
                                    name="name" />
                            </div>



                            <div className="wrap-input100 " >
                                <input
                                    className="input100"
                                    placeholder='Email'
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
                                    <a href="/login">
                                        Already have an account ? <span style={{ color: "red" }}>Log In</span>
                                    </a>
                                </div>
                            </div>

                            {/* LOGIN BUTTON */}

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={handleSubmit}>
                                    Register
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

export default SignUp