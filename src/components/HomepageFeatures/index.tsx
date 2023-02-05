import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Learn',
    Svg: require('@site/static/img/feature_learn.svg').default,
    description: (
      <>
        Colf.io is extremely easy to pick up. Within a few minutes, you will be able to understand how components are wired up.
      </>
    ),
  },
  {
    title: 'Easy to Prototype',
    Svg: require('@site/static/img/feature_prototype.svg').default,
    description: (
      <>
        Thanks to the component-oriented approach, you will be able to iteratively prototype your project from the very beginning. 
      </>
    ),
  },
  {
    title: 'Easy to Educate',
    Svg: require('@site/static/img/feature_educate.svg').default,
    description: (
      <>
        As colf.io can be easily incorporated into any webpage, it can be used to demonstrate any kind of visual data processing, algorithms, and patterns.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
     <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={clsx(styles.features, styles.section__odd, styles.gallery)}>
      <div className="container">
        <h2>Gallery</h2>
        <p>Check out all games made in Colf.io on our <a href="https://aphgames.io/gallery">APHGames webpage</a>!</p>
        <img src='img/gallery.jpg' />
      </div>
    </section>
    </>
  );
}
