import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import ProjectMembers from '../../components/ProjectMembers/ProjectMembers';
import Pricing from '../../components/Pricing/Pricing';


function Home() {

    const [subscriber, setSubscriber] = useState("");


    const addNewSubscriber = async (e) => {
        e.preventDefault();
        console.log("Subscriber");

        const response = await fetch("http://localhost:4000/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: subscriber
            })
        })

        // const json = await response.json();


        if (!response.ok) {
            console.log("Cannot add a new subscriber to the database");
        }
        if (response.ok) {
            console.log("New subscriber added");
        }

        setSubscriber("");
    }
    return (
        <section className="home page-template-default page page-id-13737 wp-custom-logo wp-embed-responsive post-image-aligned-center slideout-enabled slideout-mobile sticky-menu-fade sticky-enabled both-sticky-menu mobile-header mobile-header-logo mobile-header-sticky no-sidebar nav-float-right one-container header-aligned-left dropdown-hover full-width-content elementor-default elementor-kit-15910"
            itemType="https://schema.org/WebPage" itemScope>

            <div id="page" className="site grid-container container hfeed">
                <div id="content" className="site-content">

                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">

                            <article id="post-13737" className="post-13737 page type-page status-publish"
                                itemType="https://schema.org/CreativeWork" itemScope>
                                <div className="inside-article">

                                    <div className="entry-content" itemProp="text">

                                        <div className="wp-block-columns">
                                            <div className="wp-block-column"></div>
                                        </div>



                                        <div className="wp-block-group">
                                            <div className="wp-block-group__inner-container">
                                                <div className="wp-block-columns">
                                                    <div className="wp-block-column" style={{ flexBasis: "50%" }}>
                                                        <div className="gb-container gb-container-2f5c5583 alignwide">
                                                            <div className="gb-inside-container">

                                                                <h1 className="has-text-align-left" style={{ fontSize: "40px" }}>
                                                                    <strong>
                                                                        Scan &amp; Detect
                                                                    </strong>

                                                                    <br />
                                                                    <strong>
                                                                        <span
                                                                            style={{ color: "#cb2653" }}
                                                                            className="has-inline-color">Deepfake
                                                                        </span> Videos
                                                                    </strong>
                                                                </h1>

                                                                <p style={{ fontSize: "23px" }}>
                                                                    <strong>
                                                                        <a rel="noreferrer noopener"
                                                                            target="_blank"
                                                                            href="https://scanner.deepware.ai/">Scan&nbsp;
                                                                        </a>
                                                                    </strong>
                                                                    a suspicious video to find out if it&#8217;s synthetically
                                                                    manipulated
                                                                </p>


                                                                <div className="gb-button-wrapper gb-button-wrapper-9d2089de">

                                                                    <Link className="gb-button gb-button-f91d073d gb-button-text"
                                                                        to="/scanner">
                                                                        <strong>
                                                                            GO TO SCANNER
                                                                        </strong>
                                                                    </Link>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="wp-block-column" style={{ flexBasis: "57%" }}>
                                                        <div className="gb-container gb-container-c545f042">
                                                            <div className="gb-inside-container">

                                                                <figure className="wp-block-image size-large is-style-default">
                                                                    <a
                                                                        href="https://scanner.deepware.ai/">
                                                                        <img
                                                                            loading="lazy" width="800" height="409"
                                                                            src="https://deepware.ai/wp-content/uploads/2021/05/marilyn-scan-this-video.jpg"
                                                                            alt="" className="wp-image-17281" />
                                                                    </a>
                                                                </figure>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wp-block-columns">
                                            <div className="wp-block-column" style={{ flexBasis: "100%" }}>
                                                <div className="gb-container gb-container-3050821b">
                                                    <div className="gb-inside-container">
                                                        <div className="gb-grid-wrapper gb-grid-wrapper-c98a7912">
                                                            <div className="gb-grid-column gb-grid-column-1dc00a63">
                                                                <div className="gb-container gb-container-1dc00a63">
                                                                    <div className="gb-inside-container">

                                                                        <figure className="wp-block-image size-large"><img
                                                                            loading="lazy" width="500" height="281"
                                                                            src="https://deepware.ai/wp-content/uploads/2021/02/ezgif-6-c98e803612fa-1.gif"
                                                                            alt="" className="wp-image-15732" />
                                                                        </figure>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="gb-grid-column gb-grid-column-08bd5304">
                                                                <div className="gb-container gb-container-08bd5304">
                                                                    <div className="gb-inside-container">

                                                                        <h2 className="has-text-align-left" style={{ fontSize: "33px" }}>
                                                                            <strong>Enemy at the Gates</strong>
                                                                        </h2>



                                                                        <p className="has-text-align-left" style={{ fontSize: "18px" }}>
                                                                            Cybersecurity faces an emerging threat generally
                                                                            known as deepfakes. Malicious uses of AI-generated
                                                                            synthetic media, the most powerful cyber-weapon in
                                                                            history is just around the corner.</p>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </article>
                        </main>
                    </div>


                </div>
            </div>
            <ProjectMembers></ProjectMembers>

            <Pricing></Pricing>


            <div className="gb-container gb-container-28426ca5">
                <div className="gb-inside-container">

                    <p className="has-large-font-size"><strong>Subscribe</strong></p>



                    <p>We publish a monthly newsletter that includes <
                        br />
                        news, statistics and
                        researches related to the deepfakes. <br />Sign up to not miss a thing!<br />
                    </p>

                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-13736" method="post"
                        data-id="13736" data-name="Newsletter">

                        <div className="mc4wp-form-fields">
                            <input
                                type="email"
                                name="EMAIL"
                                value={subscriber}
                                onChange={(e) => { setSubscriber(e.target.value) }}
                                placeholder="Email Address" required />
                            <input
                                type="submit"
                                onClick={addNewSubscriber}
                                value="Subscribe" />

                        </div>


                        <div className="mc4wp-response"></div>
                    </form>

                </div>
            </div>


        </section>
    )
}

export default Home