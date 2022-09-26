import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/800px-SARS-CoV-2_without_background.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Covid-19 Tracker Logo"
          />{" "}
          Covid-19 Tracker
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
