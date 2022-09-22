// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inbox Startup',
  tagline: 'Helping Startups during the chaotic zero stage.',
  url: 'https://inboxstartup.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Inbox Startup',
        logo: {
          alt: 'Inbox Startup',
          src: 'img/inbox-startup-icon.svg',
        },
        items: [
          {type: 'doc', docId: 'start', label: 'Docs', position: 'left',},
          {to: '/blog', label: 'Blog', position: 'left',},
          {to: '/contact', label: 'Contact', position: 'left',},
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Docs', to: '/docs/start',},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'Twitter', href: 'https://twitter.com/InboxStartup',},
            ],
          },
          {
            title: 'About',
            items: [
              {label: 'Blog', to: '/blog',},
              {label: 'Contact', to: '/contact',},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inbox Startup.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
