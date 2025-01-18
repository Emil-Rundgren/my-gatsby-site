import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

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
    <Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Emil Rundgren</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {dynamicLinks.map((nav, index) => (
              <Nav.Link
                key={index}
                href={nav.slug === "home" ? "/" : `/${nav.slug}`}
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
