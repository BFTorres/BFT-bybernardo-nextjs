import {dsnCN} from "../../hooks/helper";
import Button from "../button/Button";
import BgDot from "../header/BgDot";

const NextContent = {
    title: "Let's work together",
    /* subtitle: `Don't be weird.`, */
    /* buttonText: "Let's work together" */
};

function NextPage({className, ...restProps}) {
    return (
        <section className={dsnCN("next-page p-relative d-flex align-items-center", className)}
                 {...restProps}
        >
            {/* <BgDot/>
            <BgDot rightPosition/> */}
            <div className="container w-100">
                <div className="c-wrapper d-flex justify-content-between">
                    <div className="d-flex flex-column">
                        {/* <p className="sub-heading line-shape line-shape-after ">
                            <span className="line-bg-left">{NextContent.subtitle}</span>
                        </p>
                        <h2 className="section-title max-w750 mt-15">
                            {NextContent.title}
                        </h2> */}
                        <h2 className="section-title text-uppercase">
                            {NextContent.title}
                        </h2>
                    </div>

                    {/* <div className="button-box d-flex justify-content-end align-items-center">
                        <Button
                            href={"/https://www.linkedin.com/in/bernardo-fonseca-torres/"}
                            className="button-brutalist mr-15 "
                            borderStyle={false}
                            borderRadius
                            transitionPage={{title: NextContent.buttonText}}
                        >
                            {NextContent.buttonText}
                        </Button>
                    </div> */}
                </div>
                <div className="button-box d-flex align-items-center">
                        {/* <Button
                            href={"/work-card-2-col"}
                            className="button-brutalist mt-20 mr-20 "
                            borderStyle={false}
                            borderRadius
                            transitionPage={{title: "Portfolio"}}
                        >
                            {NextContent.buttonText}
                        </Button> */}
                        {/* <Button href={"/blog-list"} className="button-brutalist mt-20" borderStyle={false} borderRadius>
                            Articles
                        </Button> */}
                        <Button href={"https://www.linkedin.com/in/bernardo-fonseca-torres/"} className="button25 mt-20" borderStyle={false} borderRadius>
                            Contact me
                        </Button>
                </div>
            </div>
        </section>
    );
}

export default NextPage;
