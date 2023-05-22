import { useEffect } from "react";

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConsentConfig';

const CookieConsent = () => {
  useEffect(() => {
    /**
     * useEffect is executed twice (React 18+),
     * make sure the plugin is initialized and executed once
     */
    if (!document.getElementById('cc--main')) {
      window.CookieConsentApi = window.initCookieConsent();
      window.CookieConsentApi.run(pluginConfig);
    }
  }, []);

  return null;
};

export default CookieConsent;