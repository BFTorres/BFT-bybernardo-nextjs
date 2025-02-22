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
    title: `digital craftsman`,
    subtitle: `<span class="background-section pl-15 pr-15 pt-5 pb-5 d-inline-block">Bernardo Fonseca Torres</span>`,
    /* src: "/img/BLACK_III_desktop-1.jpg" */
    src: "/img/chao.webp"
};
const headerData = {
    /* title: `Bernardo Fonseca`.toUpperCase(), */
    subtitle: `
    <h4 class="subtitle-index">
        DIGITAL CRAFTSMAN
    </h4>
    <h5 class="subtitle-index pb-30">
         
        Bernardo is a designer/developer crafting intuitive experiences that empower human to connect, learn, and thrive in digital spaces. Currently product designer @Lohoff.
    </h5>
    `,
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
                    Bernardo Fonseca Torres - Product Designer and Frontend Developer based in Hannover, Germany.
                </title>
            </Head>
            {/* <HeaderFull className="dsn-container" heroContent={headerData} overlay={5} fullWidth >
                <Button href={"/about"} className="button25 mt-20 mr-40" borderStyle={false} borderRadius>
                    About Me
                </Button>
                <Button href={"/slider-full-distortion-h"} className="button25 mt-20" borderStyle={false} borderRadius>
                    Work
                </Button>
            </HeaderFull> */}
            <HeaderFull
                className="dsn-container"
                fullWidth
                heroContent={headerContent}
                overlay={6}
            >
                <p className="mt-30 pb-30 border-bottom max-w570">
                    Bernardo is a designer/developer crafting intuitive experiences that empower humans to connect, learn, and thrive in digital spaces. Currently product designer @Lohoff.
                </p>

                <div className="d-flex align-items-center mt-30">
                <Button href={"/about"} className="button25 mt-20 mr-40" borderStyle={false} borderRadius>
                    About
                </Button>
                <Button href={"/slider-full-distortion-h"} className="button25 mt-20" borderStyle={false} borderRadius>
                    Work
                </Button>
                </div>
            </HeaderFull>
            

            {/*Start Portfolio*/}

            
            {/* <div className="section-margin">
                <TitleSection
                        className={`container`}
                    >
                        WORK
                    </TitleSection>
                    <Portfolio stylePortfolio={"work-classic"}
                            useFilter
                            styleBox={"styleBox"}
                            col={2} colGap={50} rowGap={50}
                    />
            </div> */}
            <div className=" p-relative dsn-under-header " data-dsn-title="Work">
                <div className="half-bg-top background-section h-50"/>
                <PortfolioSwiper grabCursor
                                 desktop={{spaceBetween: 50, slidesPerView: 1.5}}
                                 tablet={{spaceBetween: 20, slidesPerView: 1.25}}
                                 mobile={{spaceBetween: 0, slidesPerView: 1}}
                                 stylePortfolio="work-section"
                                 className="v-dark-head title-inherit h4"
                                 centeredSlides loop
                                 blur
                                 parallax
                                 speed={1200}
                                 watchSlidesProgress
                                 loopedSlides={2}
                                 parallaxImage={{
                                     "data-swiper-parallax-scale": "0.85" ,
                                     "data-swiper-parallax": "20%" ,
                                 }}
                                 parallaxContent={{"data-swiper-parallax-opacity": "0"}}
                >
                    <SwiperPagination className={`justify-content-between dsn-container mt-30`}/>
                </PortfolioSwiper>
            </div>
            {/* <div className="section-margin" data-dsn-title="Work">
                <TitleSection
                    className={`dsn-container`}
                >
                    Work
                </TitleSection>

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
            </div> */}
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
            {/* <div className="section-margin" data-dsn-title="Articles">
                <TitleSection
                    className={`container`}
                   
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
            </div> */}

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
                        </a>, <a
                        href="https://www.lufthansa.com/de/en/homepage"
                        target="_blank"
                        >
                             LUFTHANSA
                        </a> ...
                    
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
