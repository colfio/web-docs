import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">COLF.IO</h1>
        <p className="hero__subtitle">Component-Oriented Library For Interactive Objects</p>
        <img src="/img/colfio.png" />
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/installation">Quick Start
        </Link>
        </div>
        <p>Created by Adam Vesecký</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Colf.io`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
