import Layout from "../layout/Layout";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";

import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import HeaderNormal from "../components/header/HeaderNormal";
import NextPage2 from "../components/next/NextPage2";

import MetaPost from "../components/meta/MetaPost";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faThLarge} from "@fortawesome/free-solid-svg-icons";
import CommentForm from "../components/bolg/CommentForm";
import Link from "next/link";
import Head from "next/head";

function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>The Three Mile Island Accident  | Bernardo Fonseca Torres</title>
            </Head>

            {/*========== Header Normal ========== */}
            <HeaderNormal container={"container"}>
                <MetaPost category={['UX/UI Design']}/>
                <h1 className="title text-uppercase">
                    The Three Mile Island Accident
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/blog/4.jpg"} height={"80vh"}
                           parallaxFrom={{scale: 1.3}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content  ">

                    <h3>Introduction:</h3>
                    <p>In the late 1970s, the Three Mile Island accident shook the United States, revealing the critical impact of design flaws on preventing catastrophic accidents. This incident, which occurred on March 28, 1979, at the Pennsylvania-based nuclear power plant, demonstrated the dire consequences of inadequate control room design. In this article, we explore the events leading to the accident, shed light on the design shortcomings, and emphasize the significance of human-centered design to avert future disasters.</p>

                  {/*   <blockquote className="block-quote">
                        <p>On her way she met a copy. The copy
                            warned the Little Blind Text, that where it came from it would have been rewritten a
                            thousand
                            times and everything that was left from its origin would be the word “and” and the Little
                            Blind
                            Text should turn around and return to its own, safe country.</p>
                    </blockquote> */}

                    <h3>The Three Mile Island Accident:</h3>
                    <p>
                        The Three Mile Island accident was a partial nuclear meltdown that unfolded due to failures within the non-nuclear secondary system. Compounding the problem was a stuck-open valve, causing a substantial release of nuclear reactor coolant. Astonishingly, the operators at the plant failed to take action to close the valve, resulting in extensive damage and marking it as the worst accident in U.S. commercial nuclear power plant history.
                    </p>

                    <h3>
                        Design Flaws in the Control Room:
                    </h3>
                    <p>
                        In the aftermath of the Three Mile Island accident, investigators scrutinized the control room’s design and discovered significant usability issues. The user interface, in particular, proved to be a critical factor contributing to the failure to prevent the catastrophe. The control panel featured a status indicator that was intended to provide information about the valve’s position. However, it only indicated whether the valve was powered or not, failing to convey its actual state (open or closed).
                    </p>
                    <p>
                        This design oversight led the control room operators to mistakenly believe that the valve was closed when it was actually open. Misinterpreting the misleading status indicator, the operators remained unaware of the impending disaster for several hours, resulting in extensive damage.
                    </p>

                    <h3>
                    The Role of Design in Preventing Catastrophes:
                    </h3>
                    <p>
                    Renowned design expert Don Norman aptly summarized the situation at Three Mile Island, stating, “The control room and computer interfaces at Three Mile Island could not have been more confusing if they had tried.” This statement underscores the importance of adopting a user-centered design approach and the responsibility of designers to create systems that minimize the potential for human error.
                    </p>

                    <h3>
                    Blaming “Human Error” Instead of Design:
                    </h3>
                    <p>
                    In the aftermath of accidents like the one at Three Mile Island, it is common to attribute blame to “human error.” However, this perspective fails to address the root cause of the problem — the flawed design that allowed a single act by a single person to have catastrophic consequences. Surprisingly, more than 90% of industrial accidents are attributed to “human error,” highlighting a systemic issue in design.
                    </p>

                    <h3>
                    Moving Towards Human-Centered Design:
                    </h3>
                    <p>
                    Rather than simply blaming individuals, it is essential to focus on rectifying the underlying design flaws. To prevent future calamities, we must prioritize human-centered design. By emphasizing usability, creating clear and intuitive interfaces, and implementing fail-safe mechanisms, we can minimize the potential for human error and avert disasters.
                    </p>

                    <h3>
                    Conclusion:
                    </h3>
                    <p>
                    The Three Mile Island accident serves as a stark reminder of the critical role that design plays in preventing catastrophic events. The failures in the control room’s user interface highlight how even seemingly simple design elements, such as an “on/off” button and a status indicator, can have far-reaching consequences. By embracing human-centered design principles, we can empower operators, reduce the likelihood of human error, and safeguard lives. Let this incident be a catalyst for change, prompting designers, engineers, and decision-makers to prioritize safety and usability in all aspects of design.
                    </p>

                    {/*<CommentForm className="mt-section"/>*/}

                    {/* <div className="post-tags p-relative heading-color font-heading">
                        <a href="#0" title="View All Posts in Tag " rel="tag">
                            <span className="post_tag post_tag">Creative</span>
                        </a>
                        <a href="#0" title="View All Posts in Tag " rel="tag">
                            <span className="post_tag post_tag">Design</span>
                        </a>
                    </div> */}
                </div>


            </div>
            {/* <div className="pagination-post d-flex align-items-center border-style border-radius section-margin container background-section">

                <div className="pagination-item w-100 p-20">
                    <Link href="single-blog">
                        <span className="mb-5">PREVIOUS</span>
                        <h4 className="title-block word-wrap">Why a public figure</h4>
                    </Link>
                </div>

                <div className="icon p-20 border-right border-left">
                    <a className="h-100 heading-color" href="#">
                        <FontAwesomeIcon icon={faThLarge}/>
                    </a>
                </div>
                <div className="pagination-item w-100 p-20 text-right">
                    <Link href="single-blog" >
                        <span className="mb-5">NEXT</span>
                        <h4 className="title-block word-wrap">Newly-launched campaign</h4>
                    </Link>
                </div>
            </div> */}

            {/* <CommentForm className="container"/> */}
            <NextPage2 className={`background-section section-padding`}/>

            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
