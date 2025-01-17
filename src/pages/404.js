import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow-1 container py-5">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold">
            Oppps... This Page Dosen't Exist
          </h1>
          <p className="lead text-muted">
            Click On The Button Bellow To Go Back To The HomePage
          </p>
          <Link to="/" className="btn btn-dark btn-lg mt-3">
            Go Home
          </Link>
        </div>
        {/* Button */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Not Found" />;
export default NotFoundPage;
