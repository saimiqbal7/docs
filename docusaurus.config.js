// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Koii Docs",
  tagline: "Koii is Web3, for everyone.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://koii-docs-git-8-social-media-card-koif.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "concepts",
        path: "concepts",
        routeBasePath: "concepts/",
        sidebarPath: require.resolve("./contentSidebars.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "develop",
        path: "develop",
        routeBasePath: "develop/",
        sidebarPath: require.resolve("./developSidebars.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/concepts/earning-koii/proof-of-real-traffic/attention-mining",
            from: "/earning-koii/attention-mining",
          },
          {
            to: "/develop/build-dapps-with-koii/welcome-to-koii-x/",
            from: "/build-dapps-with-koii/welcome-to-koii-x",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/koii-software-toolkit-sdk/what-is-the-koii-sdk",
          },
          {
            to: "/develop/microservices-and-tasks/what-are-tasks/",
            from: "/microservices-and-tasks/what-are-tasks",
          },
          {
            to: "/concepts/earning-koii/proof-of-real-traffic/attention-mining",
            from: "/earning-koii/proof-of-real-traffic-port/attention-mining",
          },
          {
            to: "/concepts/koii-summary/tools",
            from: "/koii-summary/tools",
          },
          {
            to: "/develop/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
            from: "/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
          },
          {
            to: "/develop/build-dapps-with-koii/template-library/",
            from: "/build-dapps-with-koii/template-library",
          },
          {
            to: "/concepts/earning-koii/compute-sharing-marketplace",
            from: "/earning-koii/running-task-nodes",
          },
          {
            to: "/develop/build-dapps-with-koii/using-nfts-as-content/create-nfts",
            from: "/build-dapps-with-koii/using-nfts-as-content/create-nfts",
          },
          {
            to: "/develop/microservices-and-tasks/what-are-tasks/gradual-consensus",
            from: "/microservices-and-tasks/gradual-consensus",
          },
          {
            to: "/concepts/koii-summary/philosophy",
            from: "/koii-summary/philosophy",
          },
          {
            to: "/develop/build-dapps-with-koii/using-nfts-as-content/",
            from: "/build-dapps-with-koii/using-nfts-as-content",
          },
          {
            to: "/develop/settlement-layer/creating-tokens-on-k2",
            from: "/settlement-layer/creating-tokens-on-k2",
          },
          // {
          //   to: "/",
          //   from: "/#what-is-koii",
          // },
          // {
          //   to: "/concepts/earning-koii/proof-of-real-traffic/",
          //   from: "/#the-koii-token",
          // },
          {
            to: "/develop/koii-software-toolkit-sdk/register-content/",
            from: "/earning-koii/registering-content",
          },
          {
            to: "/develop/microservices-and-tasks/what-are-tasks/gradual-consensus",
            from: "/microservices-and-tasks/what-are-tasks/gradual-consensus",
          },
          {
            to: "/develop/settlement-layer/native-contracts/the-task-contract",
            from: "/settlement-layer/native-contracts/the-task-contract",
          },
          {
            to: "/develop/settlement-layer/native-contracts/the-attention-game",
            from: "/settlement-layer/native-contracts/the-attention-game",
          },
          {
            to: "/concepts/earning-koii/network-economics",
            from: "/earning-koii/network-economics",
          },
          {
            to: "/develop/microservices-and-tasks/quote-of-the-day-example-task/google-doodle-task",
            from: "/microservices-and-tasks/quote-of-the-day-example-task",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/create-task-cli",
            from: "/koii-software-toolkit-sdk/create-task-cli",
          },
          {
            to: "/develop/microservices-and-tasks/task-development-guide/executable-structure/",
            from: "/microservices-and-tasks/task-development-guide/executable-structure",
          },
          {
            to: "/develop/microservices-and-tasks/quote-of-the-day-example-task/submit-distribution-list",
            from: "/microservices-and-tasks/quote-of-the-day-example-task/submit-distribution-list",
          },
          {
            to: "/develop/microservices-and-tasks/task-development-guide/executable-structure/validate-node",
            from: "/microservices-and-tasks/task-development-guide/executable-structure/validate-node",
          },
          {
            to: "/develop/microservices-and-tasks/what-are-tasks/key-components",
            from: "/microservices-and-tasks/what-are-tasks/key-components",
          },
          {
            to: "/develop/microservices-and-tasks/task-development-guide/task-development-flow/create-task",
            from: "/microservices-and-tasks/task-development-guide/task-development-flow/create-task",
          },
          {
            to: "/concepts/earning-koii/compute-sharing-marketplace",
            from: "/earning-koii/compute-sharing-marketplace",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/build-dapps-with-koii")) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace(
                "/build-dapps-with-koii",
                "/develop/build-dapps-with-koii"
              ),
              // existingPath.replace("/community", "/docs/support"),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/koii-network/koii-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/koii-network/koii-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-1MTMLP9766",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/thumbnail.png",
      // metadata: [
      //   {
      //     property: "og:url",
      //     content: "https://koii-docs.vercel.app",
      //   },
      //   {
      //     property: "og:image",
      //     content: "https://www.koii.network/static/thumbnail.png",
      //   },
      //   { property: "og:description", content: "Koii is Web3, for everyone." },
      //   { property: "twitter:card", content: "summary_large_image" },
      //   {
      //     property: "twitter:description",
      //     content: "Koii is Web3, for everyone.",
      //   },
      //   {
      //     property: "twitter:image",
      //     content: "https://www.koii.network/static/thumbnail.png",
      //   },
      // ],
      navbar: {
        title: "Koii Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "📖 Learn",
            to: "/concepts/koii-summary/welcome",
            activeBasePath: "concepts",
            position: "left",
            className: "header-text",
          },
          {
            label: "💻 Build",
            to: "/develop/settlement-layer/k2-tick-tock-fast-blocks",
            activeBasePath: "develop",
            position: "left",
            className: "header-text",
          },
        ],
      },
      footer: {},
      algolia: {
        // The application ID provided by Algolia
        appId: "29G9TFK9ME",
        // Public API key: it is safe to commit it
        apiKey: "0afa9bf81ac9b664f951bdf2f042b274",
        indexName: "dev_koii",
        // Optional: see doc section below
        // contextualSearch: true,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
