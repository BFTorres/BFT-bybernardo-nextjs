/**
 * @type {UserConfig}
 */
const pluginConfig = {
  current_lang: 'en',
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  force_consent: true,                   // default: false
  // hide_from_bots: false,                  // default: false
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  cookie_expiration: 182,                 // default: 182 (days) 
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  gui_options: {
    consent_modal: {
        layout: 'bar',                    // box,cloud,bar
        position: 'center',          // bottom,middle,top + left,right,center
        transition: 'slide'                 // zoom,slide
    },
    settings_modal: {
        layout: 'bar',                      // box,bar
        position: 'left',                   // right,left (available only if bar layout selected)
        transition: 'slide'                 // zoom,slide
    }
  },

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
    const analyticsEnabled =
      window.CookieConsentApi.allowedCategory('analytics');
    console.log(`analytics ${analyticsEnabled ? 'enabled' : 'disabled'}`);
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  languages: {
    en: {
      consent_modal: {
        title: 'Bernardo uses cookies to offer you a better experience. ',
        description:
          'See <button type="button" data-cc="c-settings" class="cc-link">Cookie Notice</button> for details',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all', // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Reject all',
          role: 'accept_necessary', // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: 'Cookie Settings',
        save_settings_btn: 'Save settings',
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        cookie_table_headers: [
          { col1: 'Name' },
          { col2: 'Domain' },
          { col3: 'Expiration' },
          { col4: 'Description' },
        ],
        blocks: [
          {
            title: 'Cookie usage 📢',
            description:
              'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="../../pages/imprint.js" class="cc-link">privacy policy</a>.',
          },
          {
            title: 'Strictly necessary cookies',
            description:
              'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: 'Performance and Analytics cookies',
            description:
              'These cookies allow the website to remember the choices you have made in the past',
            toggle: {
              value: 'analytics', // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: '^_ga', // match all cookies starting with "_ga"
                col2: 'google.com',
                col3: '2 years',
                col4: 'description ...',
                is_regex: true,
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'description ...',
              },
            ],
          },
          {
            title: 'Advertisement and Targeting cookies',
            description:
              'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false,
            },
          },/* 
          {
            title: 'More information',
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          }, */
        ],
      },
    },
  },
};

export default pluginConfig