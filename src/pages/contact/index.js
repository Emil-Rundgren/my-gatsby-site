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
        contact
        url
      }
    }
  `);
  const { title, url, contact } = data.contentfulContact;
  console.log(title, url, contact);

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <p>{title}</p>
      <p>{contact}</p>
      <p>{url}</p>
      <Footer />
    </div>
  );
};

// SEO settings
export const Head = () => <Seo title="Contact" />;
export default ContactPage;
