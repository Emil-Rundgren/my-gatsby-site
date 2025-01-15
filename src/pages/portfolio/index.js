import * as React from "react";
import Navbar from "../../components/navbar";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

const PortfolioPage = () => {
  // Fetch data from Contentful
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        nodes {
          title
          slug
          projectCategory
          description
          image {
            description
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  const items = data.allContentfulPortfolioItem.nodes;

  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      <div className="container py-5">
        {/* Loop through all portfolio items */}
        {items.map((item, index) => (
          <div
            key={item.slug}
            className={`row align-items-center mb-5 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="col-md-6 text-center">
              {/* Directly render the single image without map() */}
              {item.image?.gatsbyImageData ? (
                <GatsbyImage
                  image={getImage(item.image.gatsbyImageData)}
                  alt={item.image.description || item.title}
                  className="img-fluid rounded"
                />
              ) : (
                <p>No image available for this project.</p>
              )}
            </div>

            {/* Text Section */}
            <div className="col-md-6">
              <h2 className="fw-bold">{item.title}</h2>
              <p>{item.description}</p>
              <p>
                <strong>Category:</strong> {item.projectCategory}
              </p>

              {/* Button linking to the portfolio item */}
              <Link to={`/portfolio/${item.slug}`}>
                <button className="btn btn-dark mt-3">View Project</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;
