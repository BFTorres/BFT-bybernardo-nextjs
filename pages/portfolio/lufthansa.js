import ButtonProject from "../../components/button/ButtonProject";
import TitleSection from "../../components/heading/TitleSection";
import ParallaxImage from "../../components/Image/ParallaxImage";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import MoveBox from "../../components/move-box/MoveBox";
import DsnGrid from "../../layout/DsnGrid";
import Layout from "../../layout/Layout";
import {getPortfolioItem} from "../../data/portfolio";
import HeaderFull from "../../components/header/HeaderFull";
import NextProject from "../../components/next/NextProject";
import Button from "../../components/button/Button";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import Head from "next/head";

function Project4() {
    const heroData = getPortfolioItem('lufthansa');
    return (
        <Layout>
            <Head>
                <title>Lufthansa | Bernardo Fonseca Torres</title>
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
                                <strong>CLIENT</strong> <br />Lufthansa (@Lohoff.)
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
                            Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solutions for Lufthansa.
                        </p>
                        <p className="intro-project-description">
                            Unfortunately, due to privacy reasons, I can't show the bulk of my work that I did at this project. 
                        </p>
                        {/* <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject>
                        <ButtonProject href="#0" className="mt-30">
                            VIST PROJECT
                        </ButtonProject> */}
                        <Button href={"https://www.value-account.eu/acapif/portal-lufthansa/public_loginseite.prt#"} className="mt-30 mr-30 button-brutalist" borderStyle={false} borderRadius>
                            Lufthansa
                        </Button>
                        <Button href={"https://www.value-account.eu/acapif/portal-lufthansa-cityline/public_login.prt#"} className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                            CityLine
                        </Button>
                    </div>
                </DsnGrid>
            </section>
            {/*End Intro Project*/}

            {/*Start Box Info Move Content*/}
            <div className="p-relative section-margin v-light">
                <ParallaxImage src="/img/project/project4/jonas-allert-u3OtRCtJJ9s-unsplash.jpg" overlay={2} alt={""}/>
                <MoveBox>
                    <TitleSection className={`align-items-start mb-30`}
                                  defaultSpace={false}>
                                  Lufthansa
                    </TitleSection>


                    <p className="mb-10">
                        The Lufthansa Group is an aviation group with operations worldwide. With 109,509 employees, the Lufthansa Group generated revenue of EUR 32,770m in the financial year 2022. The Lufthansa Group is composed of the segments Network Airlines, Eurowings and Aviation Services. Aviation Services comprises the segments Logistics, MRO, Catering and Additional Businesses and Group Functions. The latter also include Lufthansa AirPlus, Lufthansa Aviation Training and the IT companies. All segments occupy a leading position in their respective markets.
                    </p>

                </MoveBox>
            </div>
            {/*End Box Info Move Content*/}

            {/* <NextProject heroContent={getPortfolioItem('small-silver-car')} number={5}/> */}
            <NextPage className={`background-section section-padding`}/>
            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}

        </Layout>
    );
}

export default Project4;
