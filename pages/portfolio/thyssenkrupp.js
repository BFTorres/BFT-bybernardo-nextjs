import BoxGallery, {
    BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import ButtonProject from "../../components/button/ButtonProject";
import DsnGrid from "../../layout/DsnGrid";
import Layout from "../../layout/Layout";
import HeaderFull from "../../components/header/HeaderFull";
import {getPortfolioItem} from "../../data/portfolio";
import NextProject2 from "../../components/next/NextProject2";
import Image from "next/image";
import Button from "../../components/button/Button";
import ParallaxImage from "../../components/Image/ParallaxImage";
import TitleCover from "../../components/heading/TitleCover";
import TitleSection from "../../components/heading/TitleSection";
import Head from "next/head";

function Project2(params) {
    const heroData = getPortfolioItem('thyssenkrupp');
    return (
        <Layout>
            <Head>
                <title>Thyssenkrupp | Bernardo Fonseca Torres</title>
            </Head>
            <HeaderFull className="dsn-container"
                        alignItems="end"
                        heroContent={heroData} overlay={heroData.overlay}/>
            {/*Start Intro Project*/}
            <section className="intro-project container section-margin">
                <DsnGrid customGrid={{desktop:"40% 60%"}}>
                    <div className="intro-project-left">
                        <h4 className="title-block text-uppercase mb-20">Project</h4>
                        <ul className="intro-project-list">
                            <blockquote className="block-quote">
                                    <strong>INVOLVEMENT</strong> <br />Frontend Developer, Product Designer
                            </blockquote>
                            <blockquote className="block-quote">
                                <strong>CLIENT</strong> <br />Thyssenkrupp & TKE (@Lohoff.)
                            </blockquote>
                            {/* <li className="p-relative">
                                <strong>Agency</strong>Immersive interactive gallery
                            </li>
                            <li className="p-relative">
                                <strong>creating</strong>vere
                            </li>
                            <li className="p-relative">
                                <strong> Published</strong>April 2nd 2019
                            </li> */}
                        </ul>
                    </div>
                    <div className="intro-project-right">
                        <h4 className="title-block text-uppercase mb-20">info</h4>
                        <p className="intro-project-description">
                            Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solutions (Deutscher bAV-Preis 2017) for Thyssenkrupp & TKE.
                        </p>
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject>
                        <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                        <Button href={"https://www.value-account.eu/acapif/portal-thyssenkrupp/public_loginseite.prt"} className="mt-30 mr-30 button-brutalist" borderStyle={false} borderRadiuss>
                            Thyssenkrupp
                        </Button>
                        <Button href={"https://www.value-account.eu/acapif/portal-tke/public_loginseite.prt"} className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                            TKE
                        </Button>
                    </div>
                </DsnGrid>
            </section>
            {/*Start box vertical Section*/}
            <section className="box-gallery-vertical container section-margin">
                <DsnGrid col={2} colGap={0}>
                    <div className="p-relative mb-lg-section">
                        <div className="box-im w-100 h-100 p-absolute">
                            <ParallaxImage
                                alt={""}
                                src={"/img/project/project2/trae-gould-lniazJqPXTI-unsplash.jpg"}
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
                                Thyssenkrupp
                            </TitleSection>

                            <p>
                                Thyssenkrupp is an international group of companies comprising largely independent industrial and technology businesses and employing around 96,000 people. Across 48 countries it generated sales of €41 billion in fiscal 2021/2022. Its business activities have been bundled in six segments: Materials Services, Industrial Components, Automotive Technology, Steel Europe, Marine Systems, and Multi Tracks. Backed by extensive technological know-how, the businesses develop cost-effective and resource-friendly solutions to the challenges of the future. Around 3,600 employees work in research and development at 75 locations all over the world, mainly in the fields of climate protection, the energy transition, digital transformation in the industry and mobility of the future.
                            </p>
                            <Button href="https://www.thyssenkrupp.com/en/home" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                                View More <span className="icon">⟶</span>
                            </Button>
                        </div>
                    </div>
                </DsnGrid>
            </section>
            {/*End box vertical Section*/}
            {/*End Intro Project*/}

            <NextProject2 heroContent={getPortfolioItem('lufthansa')} number={3}  />
        </Layout>
    );
}

export default Project2;
