import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Emil Rundgren | All rights reserved
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li className="mx-3">
            <a href="#!" className="text-white text-decoration-none">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
