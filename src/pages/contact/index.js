import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/custom-colors.css";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";

const ContactPage = () => {
  // Fetching data from Contentful using GraphQL
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        title
        description
        phone
        email
        linkedIn
        url
      }
    }
  `);

  const { title, phone, email, linkedIn, url, description } =
    data.contentfulContact;

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-gray">
      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow-1 container py-5 text-dark-blue ">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="display-6 fw-bold">{title}</h1>
          <p className="lead text-muted">{description}</p>
        </div>

        {/* Contact Info Section */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-light-blue p-4 text-dark-blue">
              <h3 className="fw-bold mb-3">Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Phone:</strong> {phone}
                </li>
                <li className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-decoration-none text-primary"
                  >
                    {email}
                  </a>
                </li>
                <li className="mb-2">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    {linkedIn}
                  </a>
                </li>
                <li>
                  <strong>Githhub:</strong>{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    {url}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Contact" />;
export default ContactPage;
