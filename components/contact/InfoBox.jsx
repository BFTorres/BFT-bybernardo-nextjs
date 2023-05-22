import React from 'react';
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <ul>
                <li>
                    <h5 className="title-block mb-15">Contact</h5>
                    {/* <p className="text-p ">+1 (800) 990 8877</p> */}
                    <div className="over-hidden mt-5">
                        <a className="link-hover" data-hover-text="bftorres@protonmail.com"
                           href="mailto:bftorres@protonmail.com">bftorres@protonmail.com</a>
                    </div>

                </li>
                {/* <li>
                    <h5 className="title-block mb-15">Info</h5>
                    <p className="text-p">
                        Bernardo Fonseca Torres <br />Hannover, Germany</p>
                </li> */}
                <li>
                    <h5 className="title-block mb-15">Follow me</h5>
                    {/* <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Instagram." href="#"
                           target="_blank" rel="nofollow">Instagram.</a>
                    </div> */}
                    <div className="social-item over-hidden">
                        <a 
                        className="link-hover" 
                        data-hover-text="LinkedIn" 
                        href="https://www.linkedin.com/in/bernardo-fonseca-torres/"
                        target="_blank" 
                        rel="nofollow">
                            LinkedIn
                        </a>
                    </div>
                    <div className="social-item over-hidden">
                        <a 
                        className="link-hover" 
                        data-hover-text="XING" 
                        href="https://www.xing.com/profile/Bernardo_FonsecaTorres"
                        target="_blank" 
                        rel="nofollow">
                            XING
                        </a>
                    </div>
                    <div className="social-item over-hidden">
                        <a 
                        className="link-hover" 
                        data-hover-text="MEDIUM" 
                        href="https://medium.com/@bernardofonsecatorres"
                        target="_blank" 
                        rel="nofollow">
                            MEDIUM
                        </a>
                    </div>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;