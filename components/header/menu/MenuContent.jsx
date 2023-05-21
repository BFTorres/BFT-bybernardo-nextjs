import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "https://www.linkedin.com/in/bernardo-fonseca-torres/", name: "LinkedIn"},
        {link: "https://www.xing.com/profile/Bernardo_FonsecaTorres", name: "XING"},
        {link: "https://medium.com/@bernardofonsecatorres", name: "Medium"}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Info</h5>
                    <p>
                        Bernardo Fonseca Torres <br/> Hannover, Germany
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+00 (2)012 3321" data-hover-text="+00 (2)012 3321">
                            +00 (2)012 3321
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:bftorres@protonmail.com"
                           data-hover-text="bftorres@protonmail.com">bftorres@protonmail.com</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow me</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;