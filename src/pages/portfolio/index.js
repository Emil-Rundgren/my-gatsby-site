import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles/custom-colors.css";
import "../../styles/portfolio.css";
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

      <main className="portfolio-section">
        {/* Section Title */}
        <h1 className="text-center pt-5 display-6 display-md-3 display-lg-1 fw-bold section-title">
          Watch My Latest Projects
        </h1>

        <div className="container pb-5">
          {/* Loop through all portfolio items */}
          {items.map((item, index) => (
            <React.Fragment key={item.slug}>
              <div className="card my-5 p-3 shadow-sm portfolio-card shadow-orange ">
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
                        className="img-fluid rounded-start portfolio-image"
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
                      <h2 className="fw-bold portfolio-title">{item.title}</h2>
                      <p className="portfolio-description">
                        {item.description}
                      </p>
                      <p>
                        <strong>Category: </strong>
                        <span className="badge bg-dark-blue text-white me-2 p-2">
                          {item.projectCategory}
                        </span>
                      </p>
                      <Link to={`/portfolio/${item.slug}`}>
                        <button className="btn btn-blush text-dark-blue mt-3">
                          View Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < items.length - 1 && (
                <hr className="portfolio-separator" />
              )}
            </React.Fragment>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export const Head = () => <Seo title="Portfolio"></Seo>;

export default PortfolioPage;
