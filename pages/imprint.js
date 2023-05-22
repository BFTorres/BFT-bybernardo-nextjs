import Layout from "../layout/Layout";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";

import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import HeaderNormal from "../components/header/HeaderNormal";

import MetaPost from "../components/meta/MetaPost";
import ButtonPopup from "../components/button-popup/ButtonPopup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faThLarge} from "@fortawesome/free-solid-svg-icons";
import CommentForm from "../components/bolg/CommentForm";
import Link from "next/link";
import Head from "next/head";

function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>Imprint - Data Security | Bernardo Fonseca Torres</title>
            </Head>

            {/*========== Header Normal ========== */}
            <HeaderNormal container={"container"}>
                <MetaPost category={['legal']}/>
                <h1 className="title text-uppercase">
                    IMPRINT - DATA SECURITY
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={"/img/blog/4.jpg"} height={"80vh"}
                           parallaxFrom={{scale: 1.3}} parallax={{scale: 1}}
                           overlay={5}/>
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content  ">

                    <h4>
                        ANGABEN GEMÄSS § 5 TMG
                    </h4>
                    <ul>
                        <li>
                            Bernardo F. Torres
                        </li>
                        <li>
                            Viethhof 16
                        </li>
                        <li>
                            30165 Hannover
                        </li>
                    </ul>
                    <h4>
                        Kontakt
                    </h4>
                    <ul>
                        <li>
                            Telefon: 0151XXXXXXX [Auf Anfrage]
                        </li>
                        <li>
                            E-Mail: BFTorres@protonmail.com
                        </li>
                    </ul>

                    <h3>
                        HAFTUNGSAUSSCHLUSS (DISCLAIMER)
                    </h3>
                    <blockquote className="block-quote">
                        <p>
                            Haftung für Inhalte
                        </p>
                    </blockquote>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <blockquote className="block-quote">
                        <p>
                        Haftung für Links
                        </p>
                    </blockquote>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                    <blockquote className="block-quote">
                        <p>
                            Urheberrecht
                        </p>
                    </blockquote>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                    <h3>
                        DATENSCHUTZERKLÄRUNG:
                    </h3>
                    <blockquote className="block-quote">
                        <p>
                        Datenschutzerklärung für die Nutzung von Google Analytics
                        </p>
                    </blockquote>
                    
                    <p>
                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (&quot;Google&quot;). Google Analytics verwendet sog. &quot;Cookies&quot;, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
                    </p>
                    <p>
                        Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                    </p>
                    <p>
                        Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de.
                    </p>
                </div>


            </div>


            {/*========== Footer ==========*/}
            <Footer className="background-section"/>
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
