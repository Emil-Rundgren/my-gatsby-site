import { Link } from "gatsby";
import * as React from "react";
import Navbar from "../components/navbar";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Min första gatsby sida!</h1>
      <Link to="/portfolio">Besök min portfolio</Link>
    </div>
  );
};

export const Head = () => <Seo title="Hem"></Seo>;

export default IndexPage;
