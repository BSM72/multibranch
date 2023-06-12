import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

import "./Navbar.css"

import logo from "../../images/logo.jpeg"

function Navbar() {

    const { logout, user } = useLogout();
    console.log("------------ Navbar ------------");
    console.log("User : ", user);
    if (user) {
        console.log("User : ", user.user);
    }
    console.log("----------- Navbar -------------");


    const handleLogOut = () => {
        logout();
    }

    return (
        <section className="home page-template-default page page-id-13737 wp-custom-logo wp-embed-responsive post-image-aligned-center slideout-enabled slideout-mobile sticky-menu-fade sticky-enabled both-sticky-menu mobile-header mobile-header-logo mobile-header-sticky no-sidebar nav-float-right one-container header-aligned-left dropdown-hover full-width-content elementor-default elementor-kit-15910"
            itemType="https://schema.org/WebPage" itemScope>


            <header id="masthead" className="site-header has-inline-mobile-toggle" itemType="https://schema.org/WPHeader" itemScope>



                <div className="inside-header grid-container">

                    {/* ------------ DEEP-WARE ICON ON THE NAVBAR ------------------- */}
                    <div className="site-logo">
                        <a href="/"
                            title="Deepware &#8211; Scan &amp; Detect Deepfake Videos With a Simple tool" rel="home">
                            <img className="header-image is-logo-image"
                                alt="Deepware &#8211; Scan &amp; Detect Deepfake Videos With a Simple tool"
                                src={logo}
                                title="Deepware &#8211; Scan &amp; Detect Deepfake Videos With a Simple tool"

                                width="200" height="40" />
                        </a>
                    </div>



                    <nav id="mobile-menu-control-wrapper" className="main-navigation mobile-menu-control-wrapper">
                        <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false"
                            data-nav="site-navigation">
                            <span className="gp-icon icon-menu-bars">
                                <svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                    height="1em">
                                    <path
                                        d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z" />
                                </svg>
                                <svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                    height="1em">
                                    <path
                                        d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z" />
                                </svg>
                            </span>
                            <span className="screen-reader-text">Menu</span>
                        </button>

                    </nav>

                    {/* ON THE NAVBAR 3 CONTENTS */}

                    <nav id="site-navigation" className="has-sticky-branding main-navigation sub-menu-right"
                        itemType="https://schema.org/SiteNavigationElement" itemScope>


                        <div className="inside-navigation grid-container">


                            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                                <span className="gp-icon icon-menu-bars"><svg viewBox="0 0 512 512" aria-hidden="true" role="img"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em">
                                    <path
                                        d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z" />
                                </svg><svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="1em" height="1em">
                                        <path
                                            d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z" />
                                    </svg>
                                </span>
                                <span className="screen-reader-text">Menu</span>
                            </button>



                            <div id="primary-menu" className="main-nav">
                                <ul id="menu-main-menu" className=" menu sf-menu">

                                    <li id="menu-item-13836"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13836">
                                        
                                        <a href="http://localhost:8501">DEEPFAKE SCANNER</a>
                                    </li>

                                    <li id="menu-item-13836"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13836">
                                        <a href="/about">ABOUT US</a>
                                    </li>


                                    {/* <li id="menu-item-13917"
                                        className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917">
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                     */}

                                    {/* IF WE HAVE A USER THEN SHOW DASHBOARD LINk  */}
                                    {
                                        user && (

                                            user.user.role == "admin" ? (
                                                <>

                                                    <li id="menu-item-13917 "
                                                        className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917">
                                                        <a href="/dashboard">Dashboard</a>
                                                    </li>
                                                </>
                                            )
                                                :
                                                <></>
                                        )
                                    }


                                    {/* IF WE HAVE A USER THEN SHOW LOGOUT BUTTON  */}
                                    {
                                        user && (

                                            <>

                                                <li onClick={handleLogOut} id="menu-item-13917 "
                                                    className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917">
                                                    <a href="/">Logout</a>
                                                </li>

                                                <li id="menu-item-13917"
                                                    className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917"
                                                    style={{ fontSize: "20px" }}
                                                >
                                                    {user.user.name}
                                                </li>
                                            </>
                                        )
                                    }


                                    {/* IF WE DONT HAVE A USER THEN THIS */}
                                    {
                                        !user && (
                                            <li id="menu-item-13917"
                                                className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917">
                                                <Link to="/login">Login</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>

                        </div>
                    </nav>


                </div>
            </header>

            <nav id="mobile-header" data-auto-hide-sticky="&quot;true&quot;"
                className="main-navigation mobile-header-navigation has-branding has-sticky-branding"
                itemType="https://schema.org/SiteNavigationElement" itemScope>
                <div className="inside-navigation grid-container grid-parent">
                    <div className="site-logo mobile-header-logo">
                        <a href="https://deepware.ai/"
                            title="Deepware &#8211; Scan &amp; Detect Deepfake Videos With a Simple tool" rel="home">
                            <img src="https://test.deepware.ai/wp-content/uploads/2020/12/Deepware_logo_200px.png"
                                alt="Deepware &#8211; Scan &amp; Detect Deepfake Videos With a Simple tool"
                                className="is-logo-image" width="" height="" />
                        </a>
                    </div>
                    <button className="menu-toggle" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="gp-icon icon-menu-bars">
                            <svg viewBox="0 0 512 512" aria-hidden="true" role="img"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="1em" height="1em">
                                <path
                                    d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z" />
                            </svg>
                            <svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                height="1em">
                                <path
                                    d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z" />
                            </svg></span><span className="screen-reader-text">Menu</span> </button>
                    <div id="mobile-menu" className="main-nav">
                        <ul id="menu-main-menu-1" className=" menu sf-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15239"><a
                                href="https://scanner.deepware.ai">DEEPWARE SCANNER</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13836"><a
                                href="https://deepware.ai/about/">ABOUT US</a></li>
                            <li className="freedemo menu-item menu-item-type-custom menu-item-object-custom menu-item-13917"><a
                                href="/contact/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

            </nav>



        </section>
    )
}

export default Navbar