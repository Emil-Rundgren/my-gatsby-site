import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const { siteUrl, description } = data.site.siteMetadata;

  // console.log(siteUrl, description);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
