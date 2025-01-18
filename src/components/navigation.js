import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/custom-colors.css";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenu {
        nodes {
          linkTo {
            slug
            title
          }
        }
      }
    }
  `);

  // FlatMap Flattens the array of linkTo objects from all nodes creating a single array of linkTo objects that is then mapped over to create the list items in the navbar.
  const dynamicLinks = data.allContentfulMenu.nodes.flatMap(
    (node) => node.linkTo
  );

  return (
    <Navbar expand="lg" className="bg-dark-blue" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="text-orange fw-bold">
          Emil Rundgren
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-orange text-orange"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {dynamicLinks.map((nav, index) => (
              <Nav.Link
                key={index}
                href={nav.slug === "home" ? "/" : `/${nav.slug}`}
                className="text-light-gray text-hover-orange"
              >
                {nav.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
