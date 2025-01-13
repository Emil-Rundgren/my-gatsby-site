import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navbar from "../components/navbar";
import Seo from "../components/seo";

const HomePage = () => {
  // Fetching data from Contentful using GraphQL
  const data = useStaticQuery(graphql`
    query {
      contentfulHome {
        title
        description {
          description
        }
        img {
          description
          gatsbyImageData(layout: CONSTRAINED, width: 500, placeholder: BLURRED)
        }
      }
    }
  `);

  const { title, description, img } = data.contentfulHome;
  const gatsbyImage = getImage(img);

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="container py-5">
        {/* Main content */}
        <div className="row align-items-center mt-5">
          {/* Left side - Image */}
          <div className="col-md-6 text-center">
            {gatsbyImage ? (
              <GatsbyImage
                image={gatsbyImage}
                alt={img.description || "Profile picture"}
                className="img-fluid rounded"
              />
            ) : (
              <p>Image could not be loaded.</p>
            )}
          </div>

          {/* Right side - Text content */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">{title}</h1>
            <p className="lead">{description.description}</p>
            {/* Button */}
            <button className="btn btn-dark btn-lg mt-3">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Home" />;

export default HomePage;
