// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCP-F | Network',
  tagline: 'SCP Foundation Network | An Internal Network',
  url: 'https://scpf.network/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SCP-F', // Usually your GitHub org/user name.
  projectName: 'Network', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {to: '/blog', label: 'Dev Blog', position: 'left'},
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
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCP-F, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announce_bar',
        content:
          'The Code of Ethics is still being written, and as such the layout, structure and wording may change!',
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
