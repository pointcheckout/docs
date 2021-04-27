import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'product guides',
    target: '/guides',
    imageUrl: 'img/home_guides.svg',
    description: (
      <>
        learn about the ins and outs of the pointcheckout platform through  boosts an
        array of tools was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'accept payments',
    target: '/docs',
    imageUrl: 'img/home_guides.svg',
    description: (
      <>
        Learn about the ins and outs of the PointCheckout platform through  boosts an
        array of tools  was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'E-Commerce Plugins',
    target: '/docs/integrate/plugins',
    imageUrl: 'img/home_plugins.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'SDKs',
    target: '/docs/integrate/sdks',
    imageUrl: 'img/home_plugins.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'api reference',
    target: '/api',
    imageUrl: 'img/home_api.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, target, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <Link className={clsx(styles.featureHead)} to={useBaseUrl(target)}>
        {title}
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--8">
              <h1 className="hero__title">{siteConfig.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col--8">
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="row">
            <div className="col col--8">
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--warning button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
