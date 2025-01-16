import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";

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
    }
  `);

  const projects = data.allContentfulPortfolioItem.nodes;

  return (
    <div>
      {/* Navbar component at the top of the page */}
      <Navbar />

      {/* Section Title */}
      <h1 className="text-center my-5 display-4 display-md-3 display-lg-1">
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
    </div>
  );
};

export default Homepage;
