// import logo from "../assets/IRIS-logo.svg";
// import cartlogo from "../assets/Path 14@2x.png";
// import "../style.css";
// import { Link } from "react-router-dom";
import "./Homenavbar.css";
import mainlogo from "../assets/Logo.png";
import searchlogo from "../assets/icons8-search-50.png";
import heartlogo from "../assets/icons8-favorite-30.png";
import cartlogo from "../assets/icons8-shopping-cart-24.png";
import userlogo from "../assets/icons8-customer-50.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Homenavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="upper-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="English" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={mainlogo}
              width="60"
              height="77"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">School Uniform</Nav.Link>
              <Nav.Link href="#action2">Corporate</Nav.Link>
              <Nav.Link href="#action2">Sports</Nav.Link>
              <Nav.Link href="#action2">Blogs</Nav.Link>

              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
              <div className="nav-logos">
                <Nav.Link href="#action2">
                  <img
                    src={searchlogo}
                    alt="searchlogo"
                    width="15px"
                    height="15px"
                  />
                </Nav.Link>
                <Nav.Link href="#action2">
                  <img
                    src={heartlogo}
                    alt="heartlogo"
                    width="15.68px"
                    height="13.67px"
                  />
                </Nav.Link>
                <Nav.Link href="#action2">
                  <img
                    src={cartlogo}
                    alt="cartlogo"
                    width="16.5px"
                    height="11.25px"
                  />
                </Nav.Link>
                <Nav.Link href="#action2">
                  <img
                    src={userlogo}
                    alt="userlogo"
                    width="12px"
                    height="13.50px"
                  />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
