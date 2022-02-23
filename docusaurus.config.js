/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require('path');

module.exports = {
  title: 'Paymennt documentation',
  tagline: 'build amazing experiences with the paymennt platform',
  url: 'https://docs.paymennt.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'paymennt',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Paymennt logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'guides',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'documentation',
          position: 'left',
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'api specs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} PointCheckout, Ltd.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['swift'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.docs.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'api/paymennt.yaml',
            routePath: '/api'
          }
        ],
        theme: {
          primaryColor: '#6f2277',
          redocOptions: {
            disableSearch: true,
            hideDownloadButton: true
          },
        },
      }
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'community',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars.guides.js'),
      },
    ],
    path.resolve(__dirname, 'plugins/webpack'),
  ],
};
