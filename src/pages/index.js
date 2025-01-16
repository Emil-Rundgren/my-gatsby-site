import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import Footer from "../components/footer";

const Homepage = () => {
  // Fetching project images from your data source
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        nodes {
          title
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            description
          }
        }
      }
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

  const projects = data.allContentfulPortfolioItem.nodes;

  return (
    <div>
      {/* Navbar component at the top of the page */}
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
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead">{description.description}</p>
            {/* Button */}
            <button className="btn btn-dark btn-lg mt-3">Contact Me</button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <h1 className="text-center my-5 display-5 display-md-3 display-lg-1 fw-bold">
        Watch My Latest Projects
      </h1>

      {/* Carousel Container */}
      <div
        id="projectCarousel" // Unique ID for the carousel
        className="carousel slide d-block w-75 mx-auto mb-5" // Bootstrap class for carousel functionality
        data-bs-ride="carousel" // Enables automatic cycling of slides
      >
        {/* Inner container for carousel items */}
        <div className="carousel-inner">
          {/* Mapping through project data to dynamically create carousel items */}
          {projects.map((project, index) => {
            const image = getImage(project.image); // Fetch the image for the current project
            return (
              <div
                key={project.title} // Unique key for each project
                className={`carousel-item ${index === 0 ? "active" : ""}`} // First item is "active" for initial display
              >
                {/* Display the project image */}
                <GatsbyImage
                  image={image} // The image to display
                  alt={project.image.description} // Alt text for accessibility
                />
              </div>
            );
          })}
        </div>

        {/* Previous button */}
        <button
          className="carousel-control-prev" // Bootstrap class for "previous" control
          type="button"
          data-bs-target="#projectCarousel" // Target the carousel ID
          data-bs-slide="prev" // Slide to the previous item
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle" // Icon for the previous button
            aria-hidden="true" // Hides the icon from screen readers
          ></span>
          <span className="visually-hidden">Previous</span>{" "}
          {/* Accessible text for screen readers */}
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next" // Bootstrap class for "next" control
          type="button"
          data-bs-target="#projectCarousel" // Target the carousel ID
          data-bs-slide="next" // Slide to the next item
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle" // Icon for the next button
            aria-hidden="true" // Hides the icon from screen readers
          ></span>
          <span className="visually-hidden">Next</span>{" "}
          {/* Accessible text for screen readers */}
        </button>
      </div>
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Home" />;

export default Homepage;
