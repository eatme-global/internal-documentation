import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Internal Documentation",
  tagline: "One-stop resource for all EatMe documentation and internal blogs",
  favicon: "img/favicon.ico",

  url: "https://docs.eatmeglobal.org",
  baseUrl: "/",

  organizationName: "eatme-global",
  projectName: "internal-documentation",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/eatme-global/internal-documentation/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/eatme-global/internal-documentation/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    navbar: {
      title: "EatMe",
      logo: {
        alt: "EatMe logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "defaultSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/eatme-global",
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
              label: "Intro",
              to: "/docs/intro",
            },
            {
              label: "Tutorial",
              to: "/docs/category/tutorial",
            },
            {
              label: "Development",
              to: "/docs/category/development",
            },
            {
              label: "QA",
              to: "/docs/category/qa",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/eatme-singapore",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/EatMeGlobal",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/eatme_srilanka",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/eatme-global",
            },
            {
              label: "About Us",
              href: "https://eatmeglobal.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EatMe. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
