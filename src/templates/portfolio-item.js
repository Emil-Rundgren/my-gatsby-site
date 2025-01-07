import * as React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItemTemplate = ({ data }) => {
  // console.log(data);
  const { title, image } = data.contentfulPortfolioItem;
  // Checks if the image is an array, access the first element
  const gatsbyImage = getImage(image[0]);

  // console.log(gatsbyImage);
  // console.log(image);

  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      {gatsbyImage ? (
        <GatsbyImage image={gatsbyImage} alt={title} />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

// Repetera vad skilkjer dennna frpn graphql(``)?
export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
      }
    }
  }
`;

export default PortfolioItemTemplate;
