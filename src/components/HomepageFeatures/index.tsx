import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  to?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Je suis un·e expert·e carbone",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Vous souhaitez contribuer au projet en améliorant le modèle de calcul ?
      </>
    ),
  },
  {
    title: "Je suis un·e developpeur·euse",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Vous souhaitez contribuer au projet en développant de nouvelles
        fonctionnalités ou en corrigeant des bugs ?
      </>
    ),
  },
  {
    title: "Je suis un·e curieux·se",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    to: "https://www.nosgestesclimat.fr",
    description: (
      <>Vous souhaitez en savoir plus sur le projet Nos Gestes Climat ?</>
    ),
  },
];

function Feature({ to, title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link
          className="button button--secondary button--lg text--right"
          to={to}
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
