import React, { useState ,useContext} from 'react';
import { Navbar, Nav,Button} from 'react-bootstrap';
import CartContext from '../../store/cart-context';


const Header = (props) => {
    const cartContext = useContext(CartContext);

    let qty =0;
    cartContext.items.forEach(item => {
      console.log(item)
      qty = qty + Number(item.quantity);
    })


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">My Store</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#store">Store</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>

      </Nav>

      <Button variant="outline-light" className='ms-auto me-2' onClick={props.onClick}>Cart {qty}</Button>

    </Navbar>
  );
};

export default Header;