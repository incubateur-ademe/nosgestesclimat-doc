import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Nos Gestes Climat",
  tagline:
    "Le simualateur d'empreinte carbone personnel, développé par l'Agence de la Transition Écologique (ADEME).",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://incubateur-ademe.github.io/nosgestesclimat-doc/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "incubateur-ademe", // Usually your GitHub org/user name.
  projectName: "nosgestesclimat-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr" /* , "en" */],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/incubateur-ademe/nosgestesclimat-doc",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/incubateur-ademe/nosgestesclimat-doc",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card-ngc.png",
    navbar: {
      title: "Nos Gestes Climat",
      logo: {
        alt: "Nos Gestes Climat Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "search",
          position: "right",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/incubateur-ademe/nosgestesclimat",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Site web",
              to: "/docs/website",
            },
            {
              label: "Modèle",
              to: "/docs/model",
            },
            {
              label: "Outils",
              to: "/docs/model",
            },
          ],
        },
        {
          title: "Dépôts GitHub",
          items: [
            {
              label: "Modèle (Sources)",
              href: "https://github.com/incubateur-ademe/nosgestesclimat",
            },
            {
              label: "Modèle (API)",
              href: "https://github.com/incubateur-ademe/nosgestesclimat-api",
            },
            {
              label: "Site web (Sources)",
              href: "https://github.com/incubateur-ademe/nosgestesclimat-site-nextjs",
            },
            {
              label: "Site web Legacy",
              href: "https://github.com/incubateur-ademe/nosgestesclimat-site",
            },
            {
              label: "Serveur (Sondages / Mode groupe)",
              href: "https://github.com/incubateur-ademe/nosgestesclimat-server",
            },
            {
              label: "Documentation",
              href: "https://github.com/incubateur-ademe/nosgestesclimat-doc",
            },
          ],
        },
        {
          title: "Communauté",
          items: [
            {
              label: "À propos",
              href: "https://nosgestesclimat.fr/a-propos",
            },
            {
              label: "Blog",
              href: "https://nosgestesclimat.fr/blog",
            },
            {
              label: "Nouveautés",
              href: "https://nosgestesclimat.fr/nouveautes",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/showcase/accelerateurdelatransitionecologique-ademe/",
            },
            {
              label: "Notion",
              href: "https://www.notion.so/accelerateur-transition-ecologique-ademe/Bienvenue-e77b7f07ac9047788b70c3db7b7a4fc8",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
