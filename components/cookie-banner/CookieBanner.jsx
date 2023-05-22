import Button from "../button/Button";
import React, { useState } from "react";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(
    typeof window !== "undefined" ? localStorage.getItem("cookiesAccepted") : false
  );

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", true);
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <>
      {!accepted && <div className="cookie-overlay" />}
      <div className={`cookie-banner${accepted ? " accepted" : ""}`}>
        <h5>
        This website uses cookies to ensure you get the best experience. By continuing to use this site, you consent to the use of cookies.

        </h5>
        <button onClick={acceptCookies} className="cookie-accept-btn border-rdu">
            ACCEPT
        </button>
      </div>
      <style jsx>{`
        .cookie-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.6);
          z-index: 9998;
        }

        .cookie-banner {
          font-family: var(--body-font);
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #000;
          color: #fff;
          /* padding: 100px 50px; */
          padding: 35px 30px;
          z-index: 9999;
          transition: opacity 0.3s ease;
          text-rendering: optimizeLegibility;
        }
        
        .cookie-banner.accepted {
          opacity: 0;
          pointer-events: none;
        }

        .cookie-banner p {
          margin: 0;
        }

        .cookie-accept-btn {
          background-color: #fafafa;
          color: var(--assistant-color) !important;
          border: none;
          padding: 20px 30px;
          margin-top: 30px;
          font-family: var(--heading-font);
          font-size: var(--font-size-h6);
          line-height: 16px;
          letter-spacing: 3px;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
        }

        .cookie-accept-btn:hover {
          background-color: var(--theme-color);
          color: var(--reverse-color) !important;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;
