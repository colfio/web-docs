// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'COLF.IO',
  tagline: 'Colfio Docs',
  favicon: 'img/favicon.png',

  url: 'https://colf.io',
  baseUrl: '/',
  organizationName: 'APHGAMES',
  projectName: 'colfio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          editUrl:
            'https://github.com/colfio/web-docs',
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
      // Replace with your project's social card
      image: 'img/colfio-social-card.jpg',
      navbar: {
        title: 'COLF.IO',
        logo: {
          alt: 'Colfio Logo',
          src: 'img/colfio_icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'installation',
            position: 'left',
            label: 'Installation',
          },
          {
            type: 'doc',
            docId: 'tutorialBasics/firstSteps',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/colfio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} APHGAMES`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
