import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/custom-colors.css";
import Navigation from "../components/navigation";
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
      {/* Navbar */}
      <Navigation />
      <main className=" text-dark-blue">
        {/* First Section */}
        <section className="bg-light-gray">
          <div className="container py-5">
            {/* Main content */}
            <div className="row align-items-center mt-5">
              {/* Left side - Image */}
              <div className="col-md-6 text-center">
                {gatsbyImage ? (
                  <GatsbyImage
                    image={gatsbyImage}
                    alt={img.description || "Profile picture"}
                    className="img-fluid rounded shadow-light-blue"
                  />
                ) : (
                  <p>Image could not be loaded.</p>
                )}
              </div>

              {/* Right side - Text content */}
              <div className="col-md-6">
                <h1 className="display-6 fw-bold text-dark-blue">{title}</h1>
                <p className="lead">{description.description}</p>
                {/* Button */}
                <Link className="btn btn-coral  btn-lg mt-3" to="/contact">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section | Section Title */}
        <h1 className="text-center my-5 display-6 display-md-3 display-lg-1 fw-bold text-dark-blue">
          Watch My Latest Projects
        </h1>

        {/* Carousel Container */}
        <section
          id="projectCarousel"
          className="carousel slide d-block w-75 mx-auto mb-5 bg-white shadow-light-blue rounded"
          data-bs-ride="carousel"
        >
          {/* Inner container for carousel items */}
          <div className="carousel-inner">
            {projects.map((project, index) => {
              const image = getImage(project.image);
              return (
                <div
                  key={project.title}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <GatsbyImage
                    image={image}
                    alt={project.image?.description || "Default text"}
                    className="img-fluid rounded shadow-light-blue"
                  />
                </div>
              );
            })}
          </div>

          {/* Previous button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Home" />;

export default Homepage;
