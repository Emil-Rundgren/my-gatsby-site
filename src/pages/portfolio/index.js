import * as React from "react";
import Navbar from "../../components/navbar";
// graphql, useStaticQuery is used to load data from contentful
import { Link, graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/seo";

const PortfolioPage = () => {
  // Data fetches data from contentful
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        nodes {
          title
          slug
        }
      }
    }
  `);

  // console.log(data);

  const items = data.allContentfulPortfolioItem.nodes;

  // console.log(items);

  return (
    <div>
      <Navbar />
      <h1>Min första gatsby sida!</h1>
      <Link to="/">Gå tillbaka till hem</Link>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.slug}>
              <Link to={`/portfolio/${item.slug}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;
