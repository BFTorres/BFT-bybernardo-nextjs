import BoxGallery, {
  BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import ButtonProject from "../../components/button/ButtonProject";
import ParallaxImage from "../../components/Image/ParallaxImage";
import DsnGrid from "../../layout/DsnGrid";
import Layout from "../../layout/Layout";
import NextProject3 from "../../components/next/NextProject3";
import {getPortfolioItem} from "../../data/portfolio";
import HeaderFull from "../../components/header/HeaderFull";
import Image from "next/image";
import Button from "../../components/button/Button";
import Head from "next/head";

function Project3(params) {
  const heroData = getPortfolioItem('mercedes-benz');
  return (
      <Layout>
        <Head>
            <title>Mercedes Benz | Bernardo Fonseca Torres</title>
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
                                <strong>CLIENT</strong> <br />Mercedes Benz (@Lohoff.)
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
                            Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solution for Mercedes Benz.
                        </p>
                        <Button href="https://www.value-account.eu/acapif/portal-x-mercedes/public_loginseite.prt#" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
                            VISIT PROJECT
                        </Button>
                    </div>
                </DsnGrid>
            </section>
      {/*End Intro Project*/}

      {/*Start Intro Project*/}
      <section className="container section-margin text-center">
        <div className="p-relative">
          <h4 className="title-block dsn-text max-w570 ml-auto mr-auto mb-70 sm-mb-30">
            Mercedes Benz
          </h4>

          <Image className="w-100" alt={""} src={"/img/project/project3/justus-menke-81GpBv2T_bM-unsplash.jpg"} width={1200} height={700}
               sizes="100vw" />
          <p className="dsn-up mt-30 ml-auto mr-auto max-w570">
            Mercedes-Benz Group AG is one of the world&apos;s most successful automotive companies. With Mercedes-Benz AG, the Group is one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.
          </p>
          <p className="dsn-up mt-30 ml-auto mr-auto max-w570">
            The company founders, Gottlieb Daimler and Carl Benz, made history by inventing the automobile in 1886. As a pioneer of automotive engineering, Mercedes-Benz sees shaping the future of mobility in a safe and sustainable way as both a motivation and obligation. The company&apos;s focus therefore remains on innovative and green technologies as well as on safe and superior vehicles that both captivate and inspire.
          </p>
          <Button href="https://group.mercedes-benz.com/en/" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
            View More <span className="icon">⟶</span>
          </Button>
        </div>
      </section>
      {/*End Intro Project*/}

      <NextProject3 heroContent={getPortfolioItem('lufthansa')} number={4}  />
    </Layout>
  );
}

export default Project3;
