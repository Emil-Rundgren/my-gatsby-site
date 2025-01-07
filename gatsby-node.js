// This files is used to create the pages for the blog posts, for example on page for my man united wordpress site and one for the news site. It uses the `createPages` API from Gatsby to create the pages for the blog posts. The `createPages` API is called when the Gatsby server is started. The `createPages` API is called with the `actions` object which has a `createPage` method which is used to create the pages for the blog posts.

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulPortfolioItem.nodes.forEach((node) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve("./src/templates/portfolio-item.js"),
      context: { slug: node.slug },
    });
  });
};
