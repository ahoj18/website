// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCP-F | Network',
  tagline: 'SCP Foundation Network | An Internal Network',
  url: '/',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ahoj18', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ahoj18/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ahoj18/website/tree/main/',
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
        title: 'SCP-F',
        logo: {
          alt: 'SCP-F',
          src: 'img/Main.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'coe/introduction',
            position: 'left',
            label: 'Code of Ethics',
          },
          {
            type: 'doc',
            docId: 'departments/introduction',
            position: 'left',
            label: 'Departments',
          },
          {
            type: 'doc',
            docId: 'paragon/introduction',
            position: 'left',
            label: 'Paragon',
          },
          {
            type: 'doc',
            docId: 'science/introduction',
            position: 'left',
            label: 'Science Hub',
          },
          {
            href: 'https://discord.gg/bvgf4ewS4z',
            label: 'Discord',
            position: 'right',
          },{
            href: 'https://www.roblox.com/groups/6650179/SCP-F-Special-Containment-Procedures-Foundation#!/about',
            label: 'Roblox',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCP-F, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announce_bar',
        content:
          'The Code of Ethics is subject to change at any time. Major changes will be announced in the main communications server.',
        backgroundColor: '#0000001a',
        textColor: '#5f98c0',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
