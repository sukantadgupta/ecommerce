import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaSpotify, FaYoutube } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="bg-dark py-3">
      <Container>
        <Row>
          <Col md={4} className="text-white text-center">
            <h5>The Generics</h5>
          </Col>
          <Col md={4} className="text-white text-center">
            <a href="https://www.youtube.com/"><FaYoutube size={32} className="mr-3" /></a>
            <a href="https://www.spotify.com/"><FaSpotify size={32} className="mr-3" /></a>
            <a href="https://www.facebook.com/"><FaFacebook size={32} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;





