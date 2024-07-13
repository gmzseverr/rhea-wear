import {
  faBarsStaggered,
  faCartShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderDraft() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="px-52 sm:px-10 my-7">
      <div className="flex justify-between items-center sm:justify-around">
        <Navbar
          expand="lg"
          className="bg-body-tertiary items-center justify-between "
        >
          <Container className="justify-between">
            <Navbar.Brand
              href="/"
              className="text-[#252B42] font-extrabold text-2xl"
            >
              rhea.
            </Navbar.Brand>
            <section className="flex">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto items-center">
                  <NavDropdown
                    title="Home"
                    className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/" activeClassName="text-[#23A6F0]">
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Product
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Pricing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Contact
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/team">Team</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="/shop"
                    className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
                  >
                    Shop
                  </Nav.Link>
                  <Nav.Link
                    href="/about"
                    className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/blog"
                    className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    href="/contact"
                    className="text-gray-300 sm:text-[#737373] py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </section>
          </Container>
        </Navbar>
        <div className="flex items-center space-x-4 sm:text-[#252B42] text-[#23A6F0] font-bold text-sm">
          <a href="" className="sm:hidden flex items-center gap-1">
            <FontAwesomeIcon icon={faUser} />
            <p>Login / Register</p>
          </a>
          <a href="#" className=" flex items-center">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className=" flex items-center">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a href="#" className="sm:hidden flex items-center">
            <FontAwesomeIcon icon={faHeart} />
          </a>

          <button onClick={toggleNav} className="hidden items-center">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderDraft;
