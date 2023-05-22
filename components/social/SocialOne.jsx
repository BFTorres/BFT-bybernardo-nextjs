import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons/faShareAlt";
import {faFacebookF, faTwitter, faInstagram, faDribbble, faMediumM, faLinkedinIn, faXing} from '@fortawesome/free-brands-svg-icons';
import {dsnCN} from "../../hooks/helper";


const socialData = [
    {link: "https://www.linkedin.com/in/bernardo-fonseca-torres/", icon: faLinkedinIn, name: "LinkedIn"},
    {link: "https://medium.com/@bernardofonsecatorres", icon: faMediumM, name: "Medium"},
    {link: "https://www.xing.com/profile/Bernardo_FonsecaTorres", icon: faXing, name: "XING"}
    /* {link: "#0", icon: faFacebookF, name: "Fb"}, */
    /* {link: "#0", icon: faTwitter, name: "Tw"}, */
    /* {link: "#0", icon: faInstagram, name: "In"}, */
];


function SocialOne({className="" , ...restProps}) {
    return (
        <div className={dsnCN("social-side social-network d-flex align-items-center" , className)} {...restProps}>
            <div className="icon" data-dsn="parallax">
                <FontAwesomeIcon icon={faShareAlt}/>
            </div>
            <ul className="socials d-flex flex-column p-absolute ">
                {socialData && socialData.map(($item, number) => <li key={number} style={{"--dsn-index-animate":socialData.length - number -1}}>
                    <a href={$item.link} target="_blank">
                        <FontAwesomeIcon icon={$item.icon}/>
                        <span>{$item.name}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    );
}


export default SocialOne;