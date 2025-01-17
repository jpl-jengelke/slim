import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Scope',
    Svg: require('@site/static/img/scope.svg').default,
    description: (
      <>
        We focus on best practices related to software project governance, documentation, and development life-cycles.
      </>
    ),
  },
  {
    title: 'Community Based',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        <p>We solicit improvement ideas and solutions from our community deliver best practices back to our members.</p>
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/iterative.svg').default,
    description: (
      <>
        We treat best practices and standards-as-code. We iteratively improve our recommendations through the open source tickets and pull requests.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
