import React from 'react'


import "./Dashboard.css"
function Dashboard() {
    return (
        <section class="admin-dashboard">
            <div class="home-content">
                <div class="overview-boxes">
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Total Users</div>
                            <div class="number">40,876</div>
                            <div class="indicator">
                                <i class='bx bx-up-arrow-alt'></i>
                                <span class="text">Un Mask</span>
                            </div>
                        </div>
                        <i class='bx bx-cart-alt cart'></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Model Accuracy</div>
                            <div class="number">71%</div>
                            <div class="indicator">
                                <i class='bx bx-up-arrow-alt'></i>
                                <span class="text">Un Mask</span>
                            </div>

                        </div>
                        <i class='bx bxs-cart-add cart two'></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Total Subscribers</div>
                            <div class="number">12,876</div>
                            <div class="indicator">
                                <i class='bx bx-up-arrow-alt'></i>
                                <span class="text">Un Mask</span>
                            </div>
                        </div>
                        <i class='bx bx-cart cart three'></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Increase In Deep Fakes</div>
                            <div class="number">11,086</div>
                            <div class="indicator">
                                <i class='bx bx-down-arrow-alt down'></i>
                                <span class="text">Un Mask</span>
                            </div>
                        </div>
                        <i class='bx bxs-cart-download cart four'></i>
                    </div>
                </div>

                <div class="sales-boxes">
                    <div class="recent-sales box">
                        <div class="title">Recent Subscribers</div>
                        <div class="sales-details">
                            <ul class="details">
                                <li class="topic">Date</li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>


                            </ul>
                            <ul class="details">
                                <li class="topic">Name</li>
                                <li><a href="#">Alex Doe</a></li>
                                <li><a href="#">David Mart</a></li>
                                <li><a href="#">Roe Parter</a></li>
                                <li><a href="#">Diana Penty</a></li>
                                <li><a href="#">Martin Paw</a></li>
                                <li><a href="#">Doe Alex</a></li>
                                <li><a href="#">Aiana Lexa</a></li>
                                <li><a href="#">Rexel Mags</a></li>
                                <li><a href="#">Tiana Loths</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Query Type</li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Returned</a></li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Returned</a></li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Delivered</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Total</li>
                                <li><a href="#">$204.98</a></li>
                                <li><a href="#">$24.55</a></li>
                                <li><a href="#">$25.88</a></li>
                                <li><a href="#">$170.66</a></li>
                                <li><a href="#">$56.56</a></li>
                                <li><a href="#">$44.95</a></li>
                                <li><a href="#">$67.33</a></li>
                                <li><a href="#">$23.53</a></li>
                                <li><a href="#">$46.52</a></li>
                            </ul>
                        </div>
                        <div class="button">
                            <a href="#">See All</a>
                        </div>
                    </div>
                    <div class="top-sales box">
                        <div class="title">Top Users</div>
                        <ul class="top-sales-details">
                            <li>
                                <a href="#">

                                    <span class="product">Vuitton Sunglasses</span>
                                </a>
                                <span class="price">$1107</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Hourglass Jeans </span>
                                </a>
                                <span class="price">$1567</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Nike Sport Shoe</span>
                                </a>
                                <span class="price">$1234</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Hermes Silk Scarves.</span>
                                </a>
                                <span class="price">$2312</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Succi Ladies Bag</span>
                                </a>
                                <span class="price">$1456</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Gucci Womens's Bags</span>
                                </a>
                                <span class="price">$2345</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Addidas Running Shoe</span>
                                </a>
                                <span class="price">$2345</span>
                            </li>
                            <li>
                                <a href="#">

                                    <span class="product">Bilack Wear's Shirt</span>
                                </a>
                                <span class="price">$1245</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Dashboard