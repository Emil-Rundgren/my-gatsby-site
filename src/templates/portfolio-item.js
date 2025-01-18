import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const PortfolioItemTemplate = ({ data }) => {
  const {
    title,
    description,
    image,
    images,
    longDescription,
    technologies,
    projectCategory,
    publishDate,
    url,
  } = data.contentfulPortfolioItem;

  // Handling the hero image
  const heroImage = getImage(image?.gatsbyImageData);
  const heroImageDescription = image?.description;

  return (
    <div>
      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <section className="container my-5 py-5 flex column-gap-4">
        <div className="row col-md-12 mx-auto">
          {/* Right side | Content */}
          <div className="col-md-4">
            <h1 className=" fw-bold .fs-3 text">{title}</h1>
            <p>
              <strong>Category: </strong>
              <span className="badge bg-dark text-white me-3">
                {projectCategory}
              </span>
            </p>
            <p>{publishDate}</p>
            <p className="pt-2">{description}</p>
            {/* Call-to-Action Button */}
            <button href="#" className="btn btn-dark">
              View Live Project
            </button>
          </div>
          {/* Left side | Image */}
          <div className="col-md-8">
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
        </div>
      </section>

      {/* Image Gallery Sections */}
      <h2 className="fw-bold text-center">Project Gallery</h2>
      <section className="container my-5 flex">
        <div className="row mt-4 col-md-12 mx-auto">
          {images?.length > 0 ? (
            images.map((img, index) => {
              const galleryImage = getImage(img.gatsbyImageData);
              return galleryImage ? (
                <div key={index} className="col-md-4 mb-4">
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

      {/* Challenges and Lessons Learned Section */}
      <section className="container">
        <h2 className="fw-bold">Challenges and Lessons Learned</h2>
        <p>{longDescription?.longDescription || "No description available."}</p>
        <a href={url} className="btn btn-dark">
          GitHub
        </a>
      </section>

      {/* Technologies Section */}
      <section className="container my-5">
        <h2 className="fw-bold">Technologies Used</h2>
        <ul className="list-unstyled">
          {technologies?.map((tech, index) => (
            <li key={index} className="badge bg-dark text-white me-3">
              {tech}
            </li>
          )) || <p>No technologies listed.</p>}
        </ul>
      </section>

      {/* Footer */}
      <Footer />
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
      projectCategory
      publishDate(formatString: "MMMM DD, YYYY")
      url
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
