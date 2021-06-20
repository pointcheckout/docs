/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'pointcheckout documentation',
  tagline: 'build amazing payment experiences with the pointcheckout platform',
  url: 'https://github.com/pointcheckout/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pointcheckout',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'PointCheckout logo',
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
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} PointCheckout, Ltd.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['swift'],
    },
    plugins: [
      require.resolve('./sitePlugin')
    ],
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
            spec: 'api/pointcheckout.yaml',
            routePath: '/api'
          }
        ],
        theme: {
          primaryColor: '#25405d',
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
  ],
};
