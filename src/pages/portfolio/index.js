import * as React from "react";
import Navbar from "../../components/navbar";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

const PortfolioPage = () => {
  // Fetch data from contentful
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
  const gatsbyImage = getImage(items[0].image[0]);
  console.log(gatsbyImage);

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
              {item.image?.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {item.image.map((img, imgIndex) => {
                    const imageData = getImage(img.gatsbyImageData);
                    return imageData ? (
                      <GatsbyImage
                        key={imgIndex}
                        image={imageData}
                        alt={img.description || item.title}
                        className="img-fluid rounded"
                      />
                    ) : (
                      <p key={imgIndex}>No image available</p>
                    );
                  })}
                </div>
              ) : (
                <p>No images available for this project.</p>
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
