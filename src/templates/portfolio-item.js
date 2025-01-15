import * as React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItemTemplate = ({ data }) => {
  const { title, description, image, images, longDescription, technologies } =
    data.contentfulPortfolioItem;

  // Handling the hero image
  const heroImage = getImage(image?.gatsbyImageData);
  const heroImageDescription = image?.description;

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mt-5 py-5 flex column-gap-4">
        <div className="col-md-4">
          <h1 className=" fw-bold .fs-3 text">{title}</h1>
          <p className="pt-2">{description}</p>
          {/* Call-to-Action Button */}
          <button href="#" className="btn btn-dark">
            View Live Project
          </button>
        </div>
        <div className="col-md-8">
          {/* Image */}
          {heroImage ? (
            <GatsbyImage
              image={heroImage}
              alt={heroImageDescription || "Project Image"}
              className="img-fluid rounded"
            />
          ) : (
            <p>No hero image available</p>
          )}
        </div>
      </section>

      {/* Image Gallery, Challenges & Lessons Learned and Technologies Sections */}
      <section className="container py-5 flex ">
        {/* Image Gallery Section */}
        <section className="container col-md-8">
          <h2 className="fw-bold">Project Gallery</h2>
          <div className="row mt-4">
            {images?.length > 0 ? (
              images.map((img, index) => {
                const galleryImage = getImage(img.gatsbyImageData);
                return galleryImage ? (
                  <div key={index} className="col-md-6 mb-4">
                    <GatsbyImage
                      image={galleryImage}
                      alt={img.description || `Project image ${index + 1}`}
                      className="img-fluid rounded"
                    />
                  </div>
                ) : (
                  <p key={index}>No image available</p>
                );
              })
            ) : (
              <p>No images available for this project.</p>
            )}
          </div>
        </section>

        <div className="flex row">
          {/* Challenges and Lessons Learned Section */}
          <section className="container">
            <h2 className="fw-bold">Challenges and Lessons Learned</h2>
            <p>
              {longDescription?.longDescription || "No description available."}
            </p>
            <a href="#" className="btn btn-secondary">
              GitHub
            </a>
          </section>

          {/* Technologies Section */}
          <section className="container">
            <h2 className="fw-bold">Technologies Used</h2>
            <ul className="list-unstyled">
              {technologies?.map((tech, index) => (
                <li key={index} className="badge bg-dark text-white me-2">
                  {tech}
                </li>
              )) || <p>No technologies listed.</p>}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

// GraphQL Query
export const query = graphql`
  query ($pageSlug: String!) {
    contentfulPortfolioItem(slug: { eq: $pageSlug }) {
      title
      description
      technologies
      image {
        description
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
      }
      images {
        description
        gatsbyImageData(layout: CONSTRAINED, width: 400, placeholder: BLURRED)
      }
      longDescription {
        longDescription
      }
    }
  }
`;

export default PortfolioItemTemplate;
