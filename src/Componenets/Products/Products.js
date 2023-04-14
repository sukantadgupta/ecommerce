import React,{useContext} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';


const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    id: 1,
    
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    id: 2,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    id: 3,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    id: 4,

    
    
  }
];

const Products = (props) => {

    const cartContext = useContext(CartContext);

    const addToCartHandler = (item) => {
      cartContext.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      });
    };

   
  return (
    <Container>
           <div className="bg-secondary py-3 text-center " style={{ height: '200px' }}>
           <h1 className="text-white" style={{ fontSize: '100px' , fontFamily: 'Times New Roman, sans-serif'}}>The Generics</h1>
          </div>
      <h1 className="my-4">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={4} className="mb-4">


            <Card >
            <Link to={"/product_details/" + product.id}>
                <Card.Img variant="top" src={product.imageUrl} />
              </Link>
              <Card.Body>
            <Link to={"/product_details/" + product.id}>

                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Link>

                <Button variant="primary" onClick={() => addToCartHandler(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;