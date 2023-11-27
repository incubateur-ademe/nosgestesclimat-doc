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
    title: "Je suis expert·e carbone",
    Svg: require("@site/static/img/undraw_environmental_study_re_q4q8.svg")
      .default,
    to: "/docs/model",
    description: (
      <>
        Vous souhaitez contribuer au projet en améliorant le modèle de calcul ?
      </>
    ),
  },
  {
    title: "Je suis developpeur·euse",
    Svg: require("@site/static/img/undraw_programmer_re_owql.svg").default,
    to: "/docs/contribuer",
    description: (
      <>
        Vous souhaitez contribuer au projet en développant de nouvelles
        fonctionnalités ou en corrigeant des bugs ?
      </>
    ),
  },
  {
    title: "Je suis curieux·se",
    Svg: require("@site/static/img/undraw_among_nature_p1xb.svg").default,
    to: "/docs/contribuer",
    description: (
      <>Vous souhaitez en savoir plus sur le projet Nos Gestes Climat ?</>
    ),
  },
];

const ArrowRight = require("@site/static/img/undraw_arrow.svg").default;

function Feature({ to, title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md padding-vert--md text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link
          to={to}
          className="button button--secondary button--lg text--right"
        >
          En savoir plus
        </Link>{" "}
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
