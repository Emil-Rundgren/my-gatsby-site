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
      <main className="text-dark-blue">
        {/* Hero Section */}
        <section className="bg-light-gray py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              {/* Content */}
              <div className="col-md-4">
                <h1 className="fw-bold display-6">{title}</h1>
                <p>
                  <strong>Category: </strong>
                  <span className="badge bg-dark-blue text-white p-2">
                    {projectCategory}
                  </span>
                </p>
                <p>{publishDate}</p>
                <p className="pt-2">{description}</p>
                {/* Call-to-Action Button */}
                <a href={url} className="btn btn-blush mt-3">
                  View Live Project
                </a>
              </div>

              {/* Hero Image */}
              <div className="col-md-8">
                {heroImage ? (
                  <GatsbyImage
                    image={heroImage}
                    alt={heroImageDescription || "Project Image"}
                    className="img-fluid rounded shadow-light-blue"
                  />
                ) : (
                  <p>No hero image available</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container my-5">
          <h2 className="fw-bold text-center text-dark-blue">
            Project Gallery
          </h2>
          <div className="row mt-4">
            {images?.length > 0 ? (
              images.map((img, index) => {
                const galleryImage = getImage(img.gatsbyImageData);
                return galleryImage ? (
                  <div key={index} className="col-md-4 mb-4">
                    <GatsbyImage
                      image={galleryImage}
                      alt={img.description || `Project image ${index + 1}`}
                      className="img-fluid rounded shadow-light-blue"
                    />
                  </div>
                ) : (
                  <p key={index}>No image available</p>
                );
              })
            ) : (
              <p className="text-center">
                No images available for this project.
              </p>
            )}
          </div>
        </section>

        {/* Challenges Section */}

        <section className="container  py-4 bg-white rounded shadow-orange">
          <h2 className="fw-bold text-dark-blue">
            Challenges and Lessons Learned
          </h2>
          <p>
            {longDescription?.longDescription || "No description available."}
          </p>
          <a href={url} className="btn btn-blush mt-3">
            GitHub
          </a>
        </section>

        {/* Technologies Section */}
        <section className="container py-5">
          <h2 className="fw-bold text-dark-blue">Technologies Used</h2>
          <ul className="list-unstyled">
            {technologies?.map((tech, index) => (
              <li
                key={index}
                className="badge bg-dark-blue text-white me-3 p-2"
              >
                {tech}
              </li>
            )) || <p>No technologies listed.</p>}
          </ul>
        </section>
      </main>

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
