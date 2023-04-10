import React, { useState } from 'react';
import { Navbar, Nav,Button} from 'react-bootstrap';

const Header = (props) => {



  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Store</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#store">Store</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>

      </Nav>

      <Button variant="outline-light" className='ms-auto me-2' onClick={props.onClick}>Cart (0)</Button>

    </Navbar>
  );
};

export default Header;