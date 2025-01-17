import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Emil Rundgren | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
