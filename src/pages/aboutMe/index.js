import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";

const AboutPage = () => {
  // Fetching data from Contentful using GraphQL
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
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
  const { title, description, img } = data.contentfulAboutMe;
  console.log(img);
  const gatsbyImage = getImage(img);
  console.log(gatsbyImage);
  console.log(data.contentfulAboutMe);
  console.log(data.contentfulAboutMe.description.description);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navigation />
      {/* Main content */}
      <main className="flex-grow-1 container py-5 text-dark-blue">
        <div className="row align-items-center  bg-light-gray rounded py-4 px-3">
          {/* Left side - Image */}
          <div className="col-md-6 text-center">
            {gatsbyImage ? (
              <GatsbyImage
                image={gatsbyImage}
                alt={img.description || "Profile picture"}
                className="img-fluid rounded "
              />
            ) : (
              <p>Image could not be loaded.</p>
            )}
          </div>

          {/* Right side - Text content */}
          <div className="col-md-6">
            <h1 className="display-6 fw-bold">{title}</h1>
            <p className="lead">{description.description}</p>
            {/* Button */}
            <button className="btn btn-coral btn-lg mt-3">Contact Me</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="About Me" />;
export default AboutPage;
