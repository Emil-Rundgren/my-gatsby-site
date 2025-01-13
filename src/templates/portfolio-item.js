import * as React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItemTemplate = ({ data }) => {
  // console.log(data);
  const { title, image } = data.contentfulPortfolioItem;
  // Checks if the image is an array, access the first element
  const gatsbyImage = getImage(image[0]);
  const imageDescription = image[0].description;

  // console.log(image);
  console.log(gatsbyImage);
  // console.log(imageDescription);

  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      {gatsbyImage ? (
        <GatsbyImage
          imgClassName="portfolio-image-img"
          image={gatsbyImage}
          alt={imageDescription}
        />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

// Filter, only give the data(object) where the slug = the varible $slug
// $pageSlug is a variable that is passed to the query from gatsby-node.js
export const query = graphql`
  query ($pageSlug: String!) {
    contentfulPortfolioItem(slug: { eq: $pageSlug }) {
      title
      image {
        description
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
      }
    }
  }
`;

export default PortfolioItemTemplate;
