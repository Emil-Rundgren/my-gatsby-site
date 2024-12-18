import { Link } from "gatsby";
import * as React from "react";
import Navbar from "../../components/navbar";

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Min första gatsby sida!</h1>
      <Link to="/">Gå tillbaka till hem</Link>
    </div>
  );
};

export default PortfolioPage;
