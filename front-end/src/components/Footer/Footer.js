import React from 'react'

import "./Footer.css"

import logo from "../../images/log1.jpeg";

function Footer() {
    return (
        <div className="site-footer footer-bar-active footer-bar-align-right">
            <div id="footer-widgets" className="site footer-widgets lastsection" >
                <div className="footer-widgets-container grid-container">
                    <div className="inside-footer-widgets">

                        <div className="footer-widget-1">

                            {/* DEEPWARE ICON  */}
                            <aside id="media_image-6" className="widget inner-padding widget_media_image"><img width="2000"
                                height="502" src={logo}
                                className="image wp-image-15545  attachment-full size-full" alt="" loading="lazy"
                                style={{ maxWidth: "100%", height: "auto" }} />
                            </aside>


                            {/* GITHUB LINK */}
                            <aside id="custom_html-8" className="widget_text widget inner-padding widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <p>
                                        <a href="https://github.com/Zain970/Un-Mask">
                                            <img
                                                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                                                src="https://deepware.ai/wp-content/uploads/2021/02/GitHub_Logo.png" alt=""
                                                width="153" height="46" />
                                        </a>

                                    </p>
                                </div>
                            </aside>


                        </div>

                        <div className="footer-widget-2">
                            <aside id="text-10" className="widget inner-padding widget_text">
                                <div className="textwidget">


                                    <p className="has-text-align-center">
                                        <strong>COMPANY</strong>
                                    </p>

                                    <p className="has-text-align-center">
                                        <a href="/about">About Us</a><br />
                                        <a href="/contact">Contact Us</a><br />
                                        <a href="https://deepware.ai/blog">Blog</a><br />
                                        <a href="https://deepware.ai/deepfakes-timeline/">Deepfakes Timeline</a><br />
                                        <a href="/knowledge-center">Knowledge Center</a><br />
                                        <a href="https:/deepware.ai/faq">FAQ</a><br />
                                    </p>

                                </div>
                            </aside>
                        </div>


                        <div className="footer-widget-3">
                            <aside id="text-9" className="widget inner-padding widget_text">
                                <div className="textwidget">
                                    <p className="has-text-align-center"><strong>WHERE WE ARE</strong></p>
                                    <p className="has-text-align-center">Fast University
                                        <br />
                                        Semester 8
                                        <br />
                                        Deep - Fake Video Detection
                                    </p>
                                </div>
                            </aside>
                        </div>


                    </div>
                </div>
            </div>

            <footer className="site-info" itemType="https://schema.org/WPFooter" itemScope>
                <div className="inside-site-info grid-container">
                    <div className="footer-bar">
                        <aside id="nav_menu-2" className="widget inner-padding widget_nav_menu"></aside>
                        <aside id="nav_menu-1" className="widget inner-padding widget_nav_menu">
                            <div className="menu-footer-legal-pages-container">
                                <ul id="menu-footer-legal-pages" className="menu">
                                    <li id="menu-item-195"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-195"><a
                                            href="/privacy-policy/">Privacy Policy</a></li>
                                    <li id="menu-item-196"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-196"><a
                                            href="/terms-of-services/">Terms of Service</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="copyright-bar">
                        deepfake.ai ™ | &copy; 2021 </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer