import React, { useState } from 'react';

import Products from "./Componenets/Products/Products";
import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/Footer/Footer";
import Cart from "./Componenets/Cart/Cart";
import {Modal, Button } from 'react-bootstrap';
import CartProvider from './store/CartProvider';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './Componenets/Pages/About';
import Home from './Componenets/Pages/Home';
import ContactUs from './Componenets/Pages/ContactUs'
import ProductDetails from './Componenets/Products/ProductDetails';


const router = createBrowserRouter([
  {path : "/",element : <Products/>},
  {path : "/about",element : <About/>},
  {path : "/home",element : <Home/>},
  {path : "/contact_us",element : <ContactUs/>},
  {path : "/product_details/:id",element : <ProductDetails/>}






]);
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
    <CartProvider>
    <>
    <Header onClick={handleCartClick}/>

      <RouterProvider router={router}/>
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
    
    {/* <Products/> */}
    <Footer/>
    </>
    </CartProvider>
  );
}

export default App;
