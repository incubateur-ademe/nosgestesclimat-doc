import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--success", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          to="/docs/intro"
          className="button button--primary button--lg text--right padding-horiz--md margin-right--md"
        >
          Explorer la documentation
        </Link>

        <Link
          href="nosgestesclimat.fr/simulateur/bilan"
          className="button button--secondary button--lg text--right padding-horiz--md"
        >
          Faire le test
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Doc - ${siteConfig.title}`}
      description="Documentation pour Nos Gestes Climat"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
