import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#092240" }} fixed="top">
      <Container>
        <NavLink>
          <svg
            width="63"
            height="24"
            viewBox="0 0 83 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-c487e12c-0 fcPKri logo_oz"
          >
            <g className="oz_symbol">
              <path d="M32 0H10.3662L0.450684 10.8169H21.6338V21.6338L32 10.8169V0Z" fill="#5DABE9"></path>
              <path d="M2.09808e-05 32H21.6338L31.5493 21.1831H10.3662V10.3662L2.09808e-05 21.1831V32Z" fill="#5DABE9"></path>
            </g>
            <g className="oz_text">
              <path d="M83 5H64V7.69388H79.8333L64 23.8571V27H83V24.3061H67.1667L83 8.59184V5Z" fill="white"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.958 6.60547H55.789C56.8936 6.60547 57.789 7.5009 57.789 8.60547V12.8377L60.789 9.81265V8.60547C60.789 5.84405 58.5504 3.60547 55.789 3.60547H45.958C43.1966 3.60547 40.958 5.84404 40.958 8.60546V22.0421C40.958 24.135 42.2439 25.9275 44.0686 26.6728L46.6775 24.0421H45.958C44.8534 24.0421 43.958 23.1467 43.958 22.0421V8.60546C43.958 7.5009 44.8534 6.60547 45.958 6.60547ZM50.4861 24.0421L47.5109 27.0421H55.789C58.5504 27.0421 60.789 24.8035 60.789 22.0421V13.653L57.789 16.6781V22.0421C57.789 23.1467 56.8936 24.0421 55.789 24.0421H50.4861Z"
                fill="white"
              ></path>
            </g>
          </svg>
        </NavLink>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link href="/" style={{ color: "white" }} className="nav-hover">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/oznews" style={{ color: "white" }} className="nav-hover">
              Noticias OZ Cambio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/mundo" style={{ color: "white" }} className="nav-hover">
              Noticias Mundo
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav style={{ color: "white" }} variant="pills">
          <NavDropdown menuVariant="dark" title="Navegue" id="nav-dropdown">
            <NavDropdown.Item href="https://ozcambio.com.br/plataforma" target="_blank">
              Plataforma
            </NavDropdown.Item>
            <NavDropdown.Item href="https://ozcambio.com.br/mass-payment" target="_blank">
              Mass Payment
            </NavDropdown.Item>
            <NavDropdown.Item href="https://ozcambio.com.br/sobre-api" target="_blank">
              API
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://ozcambio.com.br/" target="_blank">
              OZ Cambio
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
      <style type="text/css">
        {`
          .nav-hover:hover {
            color:rgb(108, 169, 219) !important;
            background: #fff !important;
          }
        `}
      </style>
    </Navbar>
  );
};

export default CustomNavbar;
