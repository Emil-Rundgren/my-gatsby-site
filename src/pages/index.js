import { Link } from "gatsby";
import * as React from "react";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Min första gatsby sida!</h1>
      <Link to="/portfolio">Besök min portfolio</Link>
    </div>
  );
};

export default IndexPage;
