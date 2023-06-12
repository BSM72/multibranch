import React from 'react'

import "./ProjectMembers.css"

import zain1 from "../../images/pic.jpg"



function ProjectMembers() {
    return (
        <section className='team-members'>
            <div className="row">
                <h1>Project Members</h1>
            </div>

            {/* MEMBERS DATA */}
            <div className="row members" >

                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="img" alt='' />
                        </div>
                        <h3>Zain Ul Abidin</h3>
                        <p>Developer</p>
                        <div className="icons">

                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/zain-ul-abidin-9a41181b2">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Zain970">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/">
                                <i className="fas fa-envelope"></i>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-2.png" alt='' />
                        </div>
                        <h3>Bilal Saeed</h3>
                        <p>Developer</p>

                        <div className="icons">
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <div className="img-container">
                            <img src="profile-img-3.png" alt='' />
                        </div>
                        <h3>Bilal Ali</h3>
                        <p>Designer</p>
                        <div className="icons">
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="/">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProjectMembers