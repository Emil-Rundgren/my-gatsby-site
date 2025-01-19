import * as React from "react";
import { Link } from "gatsby";
import "../styles/custom-colors.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light-gray">
      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <main className="container flex-grow-1 d-flex  justify-content-center align-items-center ">
        {/* Header Section */}
        <section className="text-center mb-4">
          <h1 className="display-1 fw-bold text-dark-blue">404</h1>
          <h2 className="display-4 fw-bold text-dark-blue">
            Oppps... This Page Dosen't Exist
          </h2>
          <p className="lead text-muted">
            Click On The Button Bellow To Go Back To The HomePage
          </p>
          {/* Button */}
          <Link to="/" className="btn btn-blush btn-lg mt-3">
            Go Home
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Not Found" />;
export default NotFoundPage;
