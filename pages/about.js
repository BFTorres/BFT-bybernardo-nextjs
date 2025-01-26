import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import List from "../components/list/List";
import DsnGrid from "../layout/DsnGrid";
import Layout from "../layout/Layout";
import BoxGallery, {
    BoxGalleryItem,
} from "../components/box-gallery/BoxGallery";
import Team from "../components/Team/Team";
import Testimonial from "../components/testimonial/Testimonial";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import NextPage from "../components/next/NextPage";
import BrandClient from "../components/brand-client/BrandClient";
import Awards from "../components/awards/Awards";
import {getTeamData} from "../data/team";
import Service from "../components/services/Service";
import {getServiceData} from "../data/service";
import Image from "next/image";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Footer from "../components/footer/Footer"
import MetaPost from "../components/meta/MetaPost";

function About() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>About | Bernardo Fonseca Torres</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal className="" style={{padding: "160px 0 0px 0px"}}> {/* text-center */}
                {/* <p className="subtitle p-relative line-shape line-shape-after mb-30">
                    <span className="pl-10 pr-10 background-section">DESIGN STUDIO</span>
                </p> */}
                <h1 className="title-brutalist text-uppercase">
                    About
                </h1>
                {/* <h3 className="text-uppercase bybernardo-red-font">
                    Bernardo Fonseca Torres
                </h3> */}
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            {/* <ParallaxImage 
            alt={""} 
            src={"/img/adsv.svg"}
            parallaxFrom={{scale: 0.3}} 
            parallax={{scale: 0.8}}
            overlay={0}
            /> */}
            {/*End Parallax Img*/}

            {/*<!-- ========== About Section ========== */}
            <div className="container section-margin" data-dsn-title="About">

                <TitleSection className="mb-15"  defaultSpace={false}/>
                {/* description={"Developer & Designer"} */}
                <DsnGrid col={2} colTablet={1}>    {/* col={1} */}
                    <div className="box-left">
                        {/* <MetaPost category={['About Me']}/> */}
                        <h4 className="max-w570 dsn-up mb-15">
                            Improving computer interfaces for human experience. A Designer and Developer, who focuses on user experience and user interface design
                        </h4>
                    </div>
                    <div className="box-right">
                        {/* <p className="max-w570 dsn-up mb-15 ">
                            Born and raised in Rio de Janeiro, my family and I moved to Germany in 2002, where I specialized after high school as a Hotel Industry Expert @<a className="" href="https://group.accor.com/en" target="_blank">Accor</a>. After ten years of professional experience in event management and sales, I graduated from the Ironhack Tech School as a Fullstack Developer, subsequently starting my career in Tech.
                            <a className="" href="" target="_blank"></a>
                        </p> */}
                        
                    </div>
                </DsnGrid>
                {/* <DsnGrid col={2} coltablet={1} className="mt-100">
                        <p className="max-570 dsn-up mb-15">
                            Originating from Rio de Janeiro and later making a home in Germany, my journey has been marked by a pursuit of knowledge and a passion for technology`s potential to improve lives. This path has led me from a foundational career in the hotel industry to a deeply felt commitment to enhancing how people interact with digital interfaces.
                        </p>
                        <p className="max-w570 dsn-up mb-15">
                            I am a Designer and Developer, dedicated to refining user experiences and the interfaces through which people engage with technology. My philosophy centers on the simplicity and intuitiveness of design, ensuring technology serves as a bridge, not a barrier, to human experiences.
                        </p>
                </DsnGrid> */}


                {/* <BoxGallery className="mt-100 container" col={2}>
                    <BoxGalleryItem src="/img/beno-rock.jpg" groupPopup="gallery"/>
                    <BoxGalleryItem src="/img/plan-project.jpg" groupPopup="gallery"/>
                </BoxGallery> */}
                <DsnGrid col={2} coltablet={1} className="mt-100">
                    <div className="box-left">
                    </div>
                    <div className="box-right">
                        <p className="max-570 dsn-up mb-15">
                            Originating from Rio de Janeiro and later making a home in Germany, my journey has been marked by a pursuit of knowledge and a passion for technology`s potential to improve lives. This path has led me from a foundational career in the hotel industry to a deeply felt commitment to enhancing how people interact with digital interfaces.
                        </p>
                        <p className="max-w570 dsn-up mb-15">
                            I am a Designer and Developer, dedicated to refining user experiences and the interfaces through which people engage with technology. My philosophy centers on the simplicity and intuitiveness of design, ensuring technology serves as a bridge, not a barrier, to human experiences.
                        </p>
                        <p className="max-w570 dsn-up mb-15">
                            My educational journey has been pivotal in shaping my approach. At the <a className="" href="https://twin-cities.umn.edu/" target="_blank">University of Minnesota</a>, I specialized in User Interface Design. This program allowed me to deepen my understanding of user research, prototyping, design psychology, and evaluation techniques, grounding my work in a user-centric design philosophy.
                        </p>
                    </div>
                    {/* <div className="box-right">
                        <p className="max-w570 dsn-up mb-15">
                            Furthering my technical skills, I graduated from the <a className="" href="https://www.ironhack.com/us" target="_blank">Ironhack Tech School</a> as a Fullstack Developer. This experience equipped me with the tools to not just envision but also build the solutions I design, marrying functionality with aesthetic in the creation of accessible, user-friendly applications.
                        </p>
                        <p className="max-w570 dsn-up mb-15">
                            Currently, I contribute to a range of projects at Lohoff, working with esteemed clients such as <a className="" href="https://www.fidelityinternational.com/" target="_blank">Fidelity International</a>, <a className="" href="https://www.bmwgroup.com/en.html" target="_blank">BMW Group</a>, <a className="" href="https://www.continental.com/en/" target="_blank">Continental</a>, and <a className="" href="https://www.lufthansa.com/us/en/homepage" target="_blank">Lufthansa</a>. My role involves integrating corporate identities and agile methodologies into our user interfaces and workflows, with the aim of crafting more engaging and effective digital environments.
                        </p>
                        <p className="max-w570 dsn-up">
                            In all my endeavors, I approach technology as a means to connect, enhance, and simplify human experiences. I believe in the power of thoughtful design and development to create solutions that resonate on a personal level and make technology more accessible to everyone.
                        </p>
                    </div> */}
                </DsnGrid>
                <DsnGrid col={2} coltablet={1} className="mt-100">
                    <div className="box-left">
                        <p className="max-w570 dsn-up mb-15">
                            Furthering my technical skills, I graduated from the <a className="" href="https://www.ironhack.com/us" target="_blank">Ironhack Tech School</a> as a Fullstack Developer. This experience equipped me with the tools to not just envision but also build the solutions I design, marrying functionality with aesthetic in the creation of accessible, user-friendly applications.
                        </p>
                        <p className="max-w570 dsn-up mb-15">
                            Currently, I contribute to a range of projects at Lohoff, working with esteemed clients such as <a className="" href="https://www.fidelityinternational.com/" target="_blank">Fidelity International</a>, <a className="" href="https://www.bmwgroup.com/en.html" target="_blank">BMW Group</a>, <a className="" href="https://www.continental.com/en/" target="_blank">Continental</a>, and <a className="" href="https://www.lufthansa.com/us/en/homepage" target="_blank">Lufthansa</a>. My role involves integrating corporate identities and agile methodologies into our user interfaces and workflows, with the aim of crafting more engaging and effective digital environments.
                        </p>
                        <p className="max-w570 dsn-up">
                            In all my endeavors, I approach technology as a means to connect, enhance, and simplify human experiences. I believe in the power of thoughtful design and development to create solutions that resonate on a personal level and make technology more accessible to everyone.
                        </p>
                    </div>
                </DsnGrid>
                {/* <List className="pt-50 mt-50 border-top pt-md-30 mt-md-30" col={3} iconSize={"21px"}>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> FinTech </List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Frontend Development </List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Product Design </List.item>
                </List> */}
            </div>
            {/*<!-- ========== End About Section ========== */}

            {/*Start Gallery List*/}
            {/* <BoxGallery className="section-margin container" col={2}>
                <BoxGalleryItem src="/img/help-project.jpg" groupPopup="gallery"/>
                <BoxGalleryItem src="/img/plan-project.jpg" groupPopup="gallery"/>
            </BoxGallery> */}
            {/*End Gallery List*/}

            {/*Start awards Section*/}
            {/* <section className="section-padding background-section" data-dsn-title="Services">
                <div className="container">
                    <TitleSection description="Our Services">
                        We are delivering beautiful <br/> digital products for you.
                    </TitleSection>
                    <Service.grid className="icon-left" styleBox="list" data={getServiceData().slice(0, 3)}/>
                </div>
            </section> */}
            {/*End awards Section*/}


            {/* <section className="awards-section section-margin" data-dsn-title="Awards">
                <div className="container">
                    <DsnGrid col={2} colTablet={1}>
                        <div className="box-left">
                            <TitleSection description={" Awards & Honors"} defaultSpace={false}>
                                The awards won by our project.
                            </TitleSection>
                            <Awards/>
                        </div>

                        <div className="box-right">
                            <div className="container-img p-relative">
                                <Image className="cover-bg-img" alt={""} src={"/img/agency-1.jpg"} width={1280}
                                       height={840}
                                       sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
                                />
                            </div>
                        </div>
                    </DsnGrid>
                </div>
            </section> */}

            {/*========== team Section ========== */}
            {/* <section className="container section-margin " data-dsn-title="Team">
                <TitleSection description={"Our Team"}>
                    The Best Team Ever!
                </TitleSection>

                <Team data={getTeamData().slice(0, 4)} col={2} colTablet={2}/>
            </section> */}
            {/*========== End team Section ========== */}

            {/*Start testimonial Section*/}
            {/* <div className="container section-margin" data-dsn-title="testimonials">
                <TitleSection description={" Feedback"}>What Clients Say</TitleSection>

                <Testimonial
                    className=" text-center"
                    styleBox={"corner"}
                    skin={["testimonials-personal", "box-line"]}
                    centeredSlides
                    desktop={{slidesPerView: 3}}
                    tablet={{slidesPerView: 1}}
                    mobile={{slidesPerView: 1}}
                    speed={1000}
                    grabCursor
                    loop
                    loopedSlides={2}
                    parallax
                    parallaxImage={{"data-swiper-parallax-scale": 0.7}}
                    parallaxContent={{
                        "data-swiper-parallax-opacity": 0,
                        "data-swiper-parallax": "30%",
                    }}
                >
                    <SwiperPagination
                        className={`justify-content-between dsn-container mt-30`}
                    />
                </Testimonial>
            </div> */}
            {/*End testimonial Section*/}

            {/*========== Start brand-client Section ==========*/}
            <section className="container section-margin" data-dsn-title="Client">
                <TitleSection>
                I&apos;VE WORKED ON PROJECTS FOR <a 
                        href="https://www.bmwgroup.com/en.html"
                        target="_blank"
                        >
                             BMW GROUP
                        </a>, 
                        <a
                        href="https://www.thyssenkrupp.com/"
                        target="_blank"
                        >
                            THYSSENKRUPP
                        </a>,  AND <a
                        href="https://www.lufthansa.com/de/en/homepage"
                        target="_blank"
                        >
                             LUFTHANSA
                        </a>
                </TitleSection>

                {/* <BrandClient col={3} colTablet={3} colGap={0} rowGap={0}/> */}
            </section>
            {/*========== End brand-client Section ==========*/}

            {/*========== Start Next Page Section ==========*/}
            <NextPage className={`background-section section-padding`}/>
            {/*========== End Next Page Section ==========*/}
            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default About;
