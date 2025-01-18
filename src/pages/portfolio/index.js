import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../../components/navigation";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

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
      <Navigation />

      {/* Section Title */}
      <h1 className="text-center my-5 display-6 display-md-3 display-lg-1 fw-bold">
        Watch My Latest Projects
      </h1>

      <div className="container pb-5">
        {/* Loop through all portfolio items */}
        {items.map((item, index) => (
          <div key={item.slug} className="card my-5 p-3 shadow-sm border-0">
            <div
              className={`row align-items-center g-0 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="col-md-6">
                {item.image?.gatsbyImageData ? (
                  <GatsbyImage
                    image={getImage(item.image.gatsbyImageData)}
                    alt={item.image.description || item.title}
                    className="img-fluid rounded-start"
                  />
                ) : (
                  <p className="text-center">
                    No image available for this project.
                  </p>
                )}
              </div>

              {/* Text Section */}
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="fw-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p>
                    <strong>Category:</strong> {item.projectCategory}
                  </p>
                  <Link to={`/portfolio/${item.slug}`}>
                    <button className="btn btn-dark mt-3">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;
