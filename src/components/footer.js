import React from "react";
import "../styles/custom-colors.css";

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Emil Rundgren | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
