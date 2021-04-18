/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'PointCheckout Documentation',
  tagline: 'Making commerce easy',
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
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'api/',
          activeBasePath: 'api',
          label: 'API Specs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PointCheckout, Ltd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
            routePath: '/api'
          }
        ],
        theme: {
          primaryColor: '#25405d',
          redocOptions: {
            disableSearch: true,
            hideDownloadButton: false
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
