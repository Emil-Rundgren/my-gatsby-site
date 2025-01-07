/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { Description } = require("@headlessui/react");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Emils portfolio`,
    siteUrl: `https://www.emilrundgren.com`,
    description:
      "A modern and responsive portfolio website where I, a frontend student, showcase my projects, technical skills, and passion for web development. It includes examples of my work, a brief 'About Me' section, and a contact form for easy communication.",
    author: "Emil Rundgren",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
