import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import HeroSection2 from "../components/hero-section/HeroSection2";
import HeroSectionThree from "../components/hero-section/HeroSectionThree";
import HeroSectionFour from "../components/hero-section/HeroSectionFour";
import HeroSectionPersonal from "../components/hero-section/HeroSectionPersonal";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Button from "../components/button/Button";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, {AccordionItem} from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import HeaderFull from "../components/header/HeaderFull";
import CookieBanner from "../components/cookie-banner/CookieBanner";
import Blog from "../components/bolg/Blog";
import HeaderNormnal from "../components/header/HeaderNormal"

import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import HeaderNormal from "../components/header/HeaderNormal";
import OptionTheme from "../components/option-theme/OptionTheme";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import Portfolio from "../components/portfolio/Portfolio";

const headerContent = {
    title: `bybernardo`,
    /* subtitle: `<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Bernardo Fonseca Torres</span>`, */
    /* src: "/img/about-me-sketch.png" */
};
const headerData = {
    /* title: `Bernardo Fonseca`.toUpperCase(), */
    subtitle: `
    <h5 class="subtitle-index pb-30">
        Saudações, いらっしゃいませ<span class="bybernardo-red-font">!</span>
    </h5>
    <h4 class="subtitle-index">
        Bernardo <span class="bybernardo-red-font">designs</span> and <span class="bybernardo-red-font">develops</span> useful and natural digital experiences. He's currently a Product Designer at <span class="bybernardo-red-font">Lohoff</span>, a leading FinTech company.
    </h4>`,
    /* src: "/img/header.jpg" */
}

function Home() {
    /* TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    }; */
    


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>
                    Home | Bernardo Fonseca Torres - Digital Craftsman, Product Designer and Front-End Developer at Lohoff.
                </title>
            </Head>

            {/* <SliderPortfolio
                webgel
                fullWidth
                className={"align-items-end pb-80"}
                webgelOptions={{
                    displacement: "/img/displacement/8.jpg",
                    speedIn: 3.5,
                }}
                metaData={{hasSeparator: true}}
            /> */}
            {/* <div className="section-margin" data-dsn-title="Start">
                <HeroSection className="container" />
            </div> */}
            <HeaderFull className="dsn-container" heroContent={headerData} overlay={5} fullWidth >
                {/* <h4 className="mt-20">
                    <span className="bybernardo-red-font">Digital Craftsman</span> based in Hannover, Germany. <br />Currently Frontend <span className="bybernardo-red-font">Developer</span> and Digital Product <span className="bybernardo-red-font">Designer</span> @Lohoff.
                </h4> */}
                {/* <Button href={"#portfolio-scroll"} className="button-brutalist mt-20 mr-20" borderStyle={false} borderRadius>
                    About Me
                </Button>
                <Button href={"/slider-full-distortion-h"} className="button-brutalist mt-20" borderStyle={false} borderRadius>
                    Work
                </Button> */}
                {/* <h1 className="title-brutalist-min text-uppercase">
                    Digital Craftsman
                </h1> */}
            </HeaderFull>
            

            {/*Start Portfolio*/}
            {/* <div className="dsn-container section-margin">
                <Portfolio stylePortfolio={"work-classic"}
                           useFilter
                           styleBox={"styleBox"}
                           col={2} colGap={50} rowGap={50}
                />
            </div> */}
            <div className="section-margin" data-dsn-title="Portfolio">
                <TitleSection
                    className={`dsn-container`}
                >
                    DIGITAL EXPERIENCES
                </TitleSection>{/* 
                <p className="dsn-container pb-30">
                    This is a just a small part of the great clients I worked for. You know how it is with designer portfolios: We don`t have time to update them because we usually are super busy making our client`s projects amazing. Also NDAs 🤫.
                </p> */}
                {/* <PortfolioSwiper
                    grabCursor
                    desktop={{spaceBetween: 50, slidesPerView: 1.5}}
                    tablet={{spaceBetween: 0, slidesPerView: 1.3}}
                    mobile={{slidesPerView: 1}}
                    stylePortfolio="work-section"
                    className="text-left  title-inherit h4"
                    centeredSlides
                    loop
                    blur
                    parallax
                    speed={1200} 
                    watchSlidesProgress
                    loopedSlides={2}
                    parallaxImage={{"data-swiper-parallax-scale": "0.85"}}
                    parallaxContent={{"data-swiper-parallax-opacity": "0"}}
                >
                    <SwiperPagination
                        className={`justify-content-between dsn-container mt-30`}
                    />
                </PortfolioSwiper> */}

                 {/*Start Portfolio*/}
                <PortfolioSwiper grabCursor
                                desktop={{spaceBetween: 0, slidesPerView: 3}}
                                tablet={{spaceBetween: 0, slidesPerView: 2 , centeredSlides: false}}
                                mobile={{spaceBetween: 0, slidesPerView: 1 , centeredSlides: false}}
                                stylePortfolio="work-section work-no-scale"
                                className="v-dark-head"
                                centeredSlides loop
                                parallax
                                speed={800}
                                watchSlidesProgress
                                loopedSlides={2}
                />

            {/*End Portfolio*/}
                
                {/* <PortfolioSwiper grabCursor
                                desktop={{spaceBetween: 0, slidesPerView: 3}}
                                tablet={{spaceBetween: 0, slidesPerView: 2 , centeredSlides: false}}
                                mobile={{spaceBetween: 0, slidesPerView: 1 , centeredSlides: false}}
                                stylePortfolio="work-section work-no-scale"
                                className="text-center v-dark-head"
                                centeredSlides loop
                                parallax
                                speed={800}
                                watchSlidesProgress
                                loopedSlides={2}
                                data-dsn-title="our Work"
                /> */}
            </div>
            {/*End Portfolio*/}

            {/*Start Service*/}
            {/* <div className="container section-margin" data-dsn-title="Our Services">
                <TitleSection
                    className="align-items-center text-center"
                    description={"Our Services"}
                >
                    We are delivering beautiful <br/> digital products for you.
                </TitleSection>
                <ServiceOne/>
            </div> */}
            {/*End Service*/}


            

            {/*Start testimonial Section*/}
            {/* <div className="section-margin" data-dsn-title="Testimonials">
                <Testimonial className="container section-margin" title="Feedback from our clients."
                             skin={["testimonials-half"]}
                             backgroundColor={"background-section"}
                             desktop={{slidesPerView: 2}}
                             mobile={{slidesPerView: 1}}
                             speed={1000} grabCursor loop loopedSlides={2}
                             parallax parallaxImage={{"data-swiper-parallax-scale": 0.7}}
                             parallaxContent={{"data-swiper-parallax-opacity": 0, "data-swiper-parallax": "30%"}}
                >
                    <SwiperPagination className={`justify-content-between dsn-container mt-30`}/>
                </Testimonial>
            </div> */}


            {/*End testimonial Section*/}

            {/*Start box vertical Section*/}
            {/* <section className="box-gallery-vertical container section-margin" data-dsn-title="Our Services">
                <DsnGrid col={2} colTablet={1} colGap={0} rowGap={0} rowGapTablet={0} rowGapMobile={0}>
                    <div className="p-relative mb-lg-section">
                        <div className="box-im w-100 h-100 p-absolute">
                            <ParallaxImage
                                alt={""}
                                src={"/img/plan-project.jpg"}
                                overlay={3}
                                height="100%"
                                heightTable={"70vh"}
                                heightMobile={"70vh"}
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
                            />
                        </div>
                    </div>
                    <div className="p-relative pt-lg-section">
                        <div className="box-info h-100 box-padding background-section ">
                            <DsnGrid className="box-info-inner" col={1} colGap={0}>
                                <TitleCover>bybernardo</TitleCover>
                                <TitleSection
                                    className={"text-uppercase"}
                                    description={"OUR PURPOSE"}
                                    defaultSpace={false}
                                >
                                    We Plan Your Project
                                </TitleSection>
                                <Accordion>
                                    <AccordionItem title="Extensive Employment" active number={1}>
                                        <p>
                                            Quisque placerat vitae lacus ut sceleris queusce luctus
                                            odio ac nibh luctus, in porttitor.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem title="Dedicated Staff" number={2}>
                                        <p>
                                            Quisque placerat vitae lacus ut sceleris queusce luctus
                                            odio ac nibh luctus, in porttitor.
                                        </p>
                                    </AccordionItem>
                                    <AccordionItem title="User Experience" number={3}>
                                        <p>
                                            Cepteur sint occaecat cupidatat proident, taken possession
                                            of my entire soul, like these sweet mornings of spring
                                            which I enjoy with my whole.
                                        </p>
                                    </AccordionItem>
                                </Accordion>
                            </DsnGrid>
                        </div>
                    </div>
                </DsnGrid>
            </section> */}
            {/*End box vertical Section*/}

            {/*Start Blog*/}
            <div className="section-margin" data-dsn-title="Articles">
                <TitleSection
                    className={`dsn-container`}
                   
                >
                    WRITTEN EXPERIENCES
                </TitleSection>
                <BlogSwiper
                    className="dsn-container"
                    grabCursor
                    desktop={{spaceBetween: 50, slidesPerView: 1.5}}
                    tablet={{spaceBetween: 30, slidesPerView: 1.3}}
                    mobile={{spaceBetween: 0, slidesPerView: 1}}
                    centeredSlides
                    loop
                    blur
                    parallax
                    speed={1200}
                    watchSlidesProgress
                    loopedSlides={2}
                    parallaxImage={{"data-swiper-parallax-scale": "0.85"}}
                    parallaxContent={{"data-swiper-parallax-opacity": "0.5"}}
                >
                    <SwiperPagination
                        className={`justify-content-between dsn-container mt-30`}
                    />
                </BlogSwiper>
            </div>

            {/* <div className="section-margin" data-dsn-title="Blog">
                <TitleSection
                className={`container  align-items-center text-center`}
                >
                    Blog
                </TitleSection>
                <Blog></Blog>
            </div> */}
            
            {/*End Blog*/}

            {/*========== team Section ========== */}
            {/* <section className="container section-margin " data-dsn-title="Our Team">
                <TitleSection
                    className={` align-items-center text-center`}
                    description={"Our Team"}
                >
                    The Best Team Ever!
                </TitleSection>

                <Team col={3} colTablet={2}/>
            </section> */}
            {/*========== End team Section ========== */}

            {/*========== End brand-client Section ==========*/}
            <section className="container section-margin">
                <TitleSection
                    className={`align-items`}
                    description={""}
                >
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
                        </a>, 
                        <a
                        href="https://www.mercedes-benz.com/en/"
                        target="_blank"
                        >
                            MERCEDES BENZ
                        </a>
                        , AND <a
                        href="https://www.lufthansa.com/de/en/homepage"
                        target="_blank"
                        >
                             LUFTHANSA
                        </a>
                    
                </TitleSection>

                {/* <BrandClient col={3} colTablet={3} colMobile={2} colGap={0} rowGap={0}/> */}
            </section>
            {/*========== End brand-client Section ==========*/}

            {/*========== Next Page ==========*/}
            <NextPage className="section-padding background-section" data-dsn-title="contact"/> {/* border-top */}
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
