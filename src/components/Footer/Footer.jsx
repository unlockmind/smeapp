import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="#">SME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            &copy; {new Date().getFullYear()} feito por{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a href="#sme" rel="noopener noreferrer" target="_blank">
              UnlockMind
            </a>{" "}
            ...
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
