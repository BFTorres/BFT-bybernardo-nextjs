import BoxGallery, {
    BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import Button from "../../components/button/Button";
import ButtonProject from "../../components/button/ButtonProject";
import TitleCover from "../../components/heading/TitleCover";
import TitleSection from "../../components/heading/TitleSection";
import ParallaxImage from "../../components/Image/ParallaxImage";
import DsnGrid from "../../layout/DsnGrid";
import Layout from "../../layout/Layout";
import HeaderFull from "../../components/header/HeaderFull";
import {getPortfolioItem} from "../../data/portfolio";
import NextProject from "../../components/next/NextProject";
import Head from "next/head";


function Project1() {

    const heroData = getPortfolioItem('bmw-group');
    return (
        <Layout>
            <Head>
                <title>BMW Group | Bernardo Fonseca Torres</title>
            </Head>
            <HeaderFull className="dsn-container"
                        alignItems="end"
                        heroContent={heroData} overlay={heroData.overlay}/>

            {/*Start Intro Project*/}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{desktop:"40% 60%"}}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        {/* <ul className="intro-project-list"> */}
                            <blockquote className="block-quote">
                                    <strong>INVOLVEMENT</strong> <br />Frontend Developer, Product Designer
                            </blockquote>
                            <blockquote className="block-quote">
                                <strong>CLIENT</strong> <br />BMW Group (@Lohoff.)
                            </blockquote>
                            {/* <li className="p-relative">
                                <strong>involvement</strong> <br />Frontend Developer, Product Designer
                            </li>
                            <li className="p-relative">
                                <strong>client</strong> <br />BMW Group
                            </li>
                            <li className="p-relative">
                                <strong>employer</strong> <br />Lohoff.
                            </li> */}
                        {/* </ul> */}
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solution for BMW Group.
                        </p>
                        <p className="intro-project-description">
                            Unfortunately, due to privacy reasons, I can`t show the bulk of my work that I did at this project. 
                        </p>
                        {/* <ButtonProject href="https://www.value-account.eu/acapif/portal-bmw/public_login.prt" className="mt-30">
                            VISIT PROJECT
                        </ButtonProject> */}
                        <Button href="https://www.value-account.eu/acapif/portal-bmw/public_login.prt" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                            VISIT PROJECT
                        </Button>
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project*/}

            {/*Start Parallax Img*/}
            {/* <ParallaxImage
                alt={""}
                src={"/img/project/project1/2.jpg"}
                overlay={3}
                caption="asdsadsa"
            /> */}
            {/*End Parallax Img*/}


            {/*Start Gallery List*/}
            {/* <BoxGallery className="section-margin container" col={3}>
                <BoxGalleryItem
                    src="/img/project/project1/3.jpg"
                    groupPopup="gallery"
                />
                <BoxGalleryItem
                    src="/img/project/project1/4.jpg"
                    groupPopup="gallery"
                />
                <BoxGalleryItem
                    src="/img/project/project1/5.jpg"
                    groupPopup="gallery"
                />
            </BoxGallery> */}
            {/*End Gallery List*/}

            {/*Start Parallax Img*/}
            {/* <ParallaxImage
                alt={""}
                src={"/img/project/project1/6.jpg"}
                caption="asdsadsa"
            /> */}
            {/*End Parallax Img*/}

            {/*Start box vertical Section*/}
            <section className="box-gallery-vertical container section-margin">
                <DsnGrid col={2} colGap={0}>
                    <div className="p-relative mb-lg-section">
                        <div className="box-im w-100 h-100 p-absolute">
                            <ParallaxImage
                                alt={""}
                                src={"/img/project/project1/roberto-nickson-Qk3mqkBuTdg-unsplash.jpg"}
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="p-relative pt-lg-section">
                        <div className="box-info h-100 box-padding background-section ">
                            <TitleCover>CLIENT</TitleCover>
                            <TitleSection
                                className={"text-uppercase mb-30"}
                                defaultSpace={false}
                            >
                                BMW Group
                            </TitleSection>

                            <p>
                                With its brands BMW, MINI, Rolls-Royce and BMW Motorrad the BMW Group is the world&apos;s leading manufacturer of premium automobiles and motorcycles and provider of premium financial and mobility services. It has a workforce of approx. 125,000 employees worldwide.
                            </p>
                            <Button href="https://www.bmwgroup.com/en.html" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                                View More <span className="icon">⟶</span>
                            </Button>
                        </div>
                    </div>
                </DsnGrid>
            </section>
            {/*End box vertical Section*/}

            <NextProject heroContent={getPortfolioItem('thyssenkrupp')} number={2}  />
        </Layout>
    );
}

export default Project1;
