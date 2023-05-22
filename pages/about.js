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

function About() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>About me | Bernardo Fonseca Torres</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal className="">
                {/* <p className="subtitle p-relative line-shape line-shape-after mb-30">
                    <span className="pl-10 pr-10 background-section">DESIGN STUDIO</span>
                </p> */}
                <h1 className="title text-uppercase">
                    Bernardo Fonseca Torres
                </h1>
                <h2 className="text-uppercase">
                    Digital Craftsman
                </h2>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/IMG_3797.PNG"}
                           parallaxFrom={{scale: 0.1}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            {/*<!-- ========== About Section ========== */}
            <div className="container section-margin" data-dsn-title="About">

                <TitleSection className="mb-15" description={"Developer & Designer"} defaultSpace={false}/>
                <DsnGrid col={2} colTablet={1}>
                    <div className="box-left">
                        <h4>My inspiration relies on the freedom of endless possibilities, and my passion for designing and developing products with a touch of simplicity and originality.</h4>
                    </div>
                    <div className="box-right">
                        <p className="max-w570 dsn-up mb-15 ">
                            Born and raised in Rio de Janeiro, my family and I moved to Germany in 2002, where I specialized after high school as a Hotel Industry Expert @<a className="" href="https://group.accor.com/en" target="_blank">Accor</a>. After ten years of professional experience in event management and sales, I graduated from the Ironhack Tech School as a Fullstack Developer, subsequently starting my career in Tech.
                        </p>

                        <p className="max-w570 dsn-up">
                            As a software developer and designer with experience in FinTech, I specialize in creating award-winning SaaS solutions that prioritize user experience and clean user interface design. Currently, I am overseeing the frontend and design for a diverse portfolio of clients @Lohoff, including BMW Group, Mercedes Benz, Thyssenkrupp, and Lufthansa. My expertise in implementing  corporate identities and agile methodologies into our user interfaces and workflows has allowed me to develop, redesign and modernize multiple prominent FinTech applications.
                        </p>
                    </div>
                </DsnGrid>
                <List className="pt-50 mt-50 border-top pt-md-30 mt-md-30" col={3} iconSize={"21px"}>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> FinTech </List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> Frontend Development </List.item>
                    <List.item icon={<FontAwesomeIcon icon={faCheck} className="theme-color"/>}
                               className="align-items-center"> UI/UX Design </List.item>
                </List>
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
                    I&apos;ve worked on projects for
                </TitleSection>

                <BrandClient col={3} colTablet={3} colGap={0} rowGap={0}/>
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
