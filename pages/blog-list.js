import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import Layout from "../layout/Layout";
import NextPage from "../components/next/NextPage";
import ModalContact from "../components/model-right/ModalContact";
import Blog from "../components/bolg/Blog";
import Footer from "../components/footer/Footer";
import Head from "next/head";


function Work() {


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>Articles | Bernardo Fonseca Torres</title>
            </Head>
        {/*========== Header Normal ========== */}
            <HeaderNormal backgroundColor="background-section" className="">
                {/* <p className="subtitle p-relative line-shape  dsn-load-animate">
                    <span className="pl-10 pr-10 background-main"> ARTICLES </span>
                </p> */}
                <h1 className="title-brutalist text-uppercase">
                    Articles
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            <div className="container section-margin">
                <Blog rowGap={120} rowGapTablet={80} />
            </div>

            {/*========== Start Next Page Section ==========*/}
            <NextPage className={`background-section section-padding`}/>
            {/*========== End Next Page Section ==========*/}
            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Work;
