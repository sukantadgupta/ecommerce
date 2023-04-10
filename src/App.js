import React, { useState } from 'react';

import Products from "./Componenets/Products/Products";
import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/Footer/Footer";
import Cart from "./Componenets/Cart/Cart";
import {Modal, Button } from 'react-bootstrap';



function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleRemoveItem = (indexToRemove) => {
    setCartElements((prevElements) =>
      prevElements.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <div className="App">
    <>
    <Header onClick={handleCartClick}/>
    {/* <Button variant="outline-dark" className='ms-auto me-2' >Cart (0)</Button> */}

    <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart cartElements={cartElements} onRemoveItem={handleRemoveItem} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
    <Products/>
    <Footer/>
    </>
    </div>
  );
}

export default App;
