import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "../../components/navbar";
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
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow-1 container py-5">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold">{title}</h1>
          <p className="lead text-muted">{description}</p>
        </div>

        {/* Contact Info Section */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow p-4">
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
                  <strong>Website:</strong>{" "}
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Contact" />;
export default ContactPage;
