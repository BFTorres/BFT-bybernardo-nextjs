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
import NextProjectLast from "../../components/next/NextProjectLast";

function Project3(params) {
  const heroData = getPortfolioItem('ford');
  return (
      <Layout>
        <Head>
            <title>Ford| Bernardo Fonseca Torres</title>
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
                                <strong>CLIENT</strong> <br />Ford (@Lohoff.)
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
                            Development and design of the user interface, aswell as establishing a top notch user experience and implementing the respective corporate identity into our award winning SaaS solution for Ford.
                        </p>
                        <Button href="https://www.value-account.eu/acapif/portal-x-fvv/public_login.prt#" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
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
            Ford
          </h4>

          <Image className="w-100" alt={""} src={"/img/project/project5/sven-d-a4S6KUuLeoM-unsplash.jpg"} width={1200} height={700}
               sizes="100vw" />
          <p className="dsn-up mt-30 ml-auto mr-auto max-w570">
            Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln brand. Ford also owns a 32% stake in China&apos;s Jiangling Motors. It also has joint ventures in China (Changan Ford), Taiwan (Ford Lio Ho), Thailand (AutoAlliance Thailand), and Turkey (Ford Otosan). The company is listed on the New York Stock Exchange and is controlled by the Ford family; they have minority ownership but the majority of the voting power.
          </p>
          <p className="dsn-up mt-30 ml-auto mr-auto max-w570">
            Ford is the second-largest U.S.-based automaker (behind General Motors) and the sixth-largest in the world (behind Toyota, Volkswagen Group, Hyundai Motor Group, Stellantis, and General Motors) based on 2022 vehicle production. At the end of 2010, Ford was the fifth-largest automaker in Europe. The company went public in 1956 but the Ford family, through special Class B shares, still retain 40 percent of the voting rights. During the financial crisis of 2007-08, the company struggled financially but did not have to be rescued by the federal government, unlike the other two major US automakers. Ford Motors has since returned to profitability, and was the eleventh-ranked overall American-based company in the 2018 Fortune 500 list, based on global revenues in 2017 of $156.7 billion. In 2008, Ford produced 5.532 million automobiles and employed about 213,000 employees at around 90 plants and facilities worldwide.
          </p>
          <Button href="https://corporate.ford.com/" className="mt-30 button-brutalist" borderStyle={false} borderRadius>
            View More <span className="icon">⟶</span>
          </Button>
        </div>
      </section>
      {/*End Intro Project*/}

      <NextProjectLast heroContent={getPortfolioItem('bmw-group')} number={1}  />
    </Layout>
  );
}

export default Project3;
