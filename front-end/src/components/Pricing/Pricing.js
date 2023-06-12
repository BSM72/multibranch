import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./Pricing.css"

import { useAuthContext } from '../../hooks/useAuthContext'

function Pricing() {

    const { user } = useAuthContext();

    const navigate = useNavigate();


    return (
        <div className="video-pricing">
            <div className="wrapper">
                <h1>Our Pricing</h1>


                {/* round pricing */}

                <div className="table basic">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">2</span>
                            </div>
                        </div>
                    </div>

                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">One Selected Video</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Best Video Quality</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>
                            <span className="icon cross"><i className="fas fa-times"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Lifetime Detect Videos</span>
                            <span className="icon cross"><i className="fas fa-times"></i></span>
                        </li>
                    </ul>
                    <div className="btn">
                        <button >
                            <Link to="/payments">Purchase</Link>
                        </button>
                    </div>
                </div>

                <div className="table premium">
                    <div className="ribbon"><span>Recommend</span></div>
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">5</span>
                            </div>
                        </div>
                    </div>

                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">One Selected Video</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Average Video Quality</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Lifetime Detect Videos</span>
                            <span className="icon cross"><i className="fas fa-times"></i></span>
                        </li>
                    </ul>
                    <div className="btn">
                        <button >
                            <Link to="/payments">Purchase</Link>
                        </button>
                    </div>
                </div>


                <div className="table ultimate">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">9</span>
                            </div>
                        </div>
                    </div>

                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">One Selected Video</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Bad Video Quality</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Lifetime Detect Videos</span>
                            <span className="icon check"><i className="fas fa-check"></i></span>
                        </li>
                    </ul>
                    <div className="btn">
                        <button >
                            <Link to="/payments">Purchase</Link>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pricing