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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PointCheckout, Ltd.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    }
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
