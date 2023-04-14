import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const productsArr = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg',
        'https://t4.ftcdn.net/jpg/01/56/14/43/360_F_156144336_s2Zogfcqap2E3WUm7CaduUA0JKpdt6xb.jpg'
      ],
      reviews: [
        {
          id: 1,
          text: 'This product is amazing!',
          rating: 5,
          author: 'John Doe'
        },
        {
          id: 2,
          text: 'I was disappointed with this product.',
          rating: 2,
          author: 'Jane Smith'
        }
      ]
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://t4.ftcdn.net/jpg/01/56/14/43/360_F_156144336_s2Zogfcqap2E3WUm7CaduUA0JKpdt6xb.jpg'
      ],
      reviews: [
        {
          id: 1,
          text: 'This product is great value for money.',
          rating: 4,
          author: 'Bob Johnson'
        }
      ]
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        'https://t4.ftcdn.net/jpg/01/56/14/43/360_F_156144336_s2Zogfcqap2E3WUm7CaduUA0JKpdt6xb.jpg'
      ],
      reviews: []
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
      ],
      reviews: [
        {
          id: 1,
          text: 'I love this product!',
          rating: 5,
          author: 'Sarah Lee'
        },
        {
          id: 2,
          text: 'Not worth the money.',
          rating: 2,
          author: 'Tom Smith'
        }
      ]
    }
  ];

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

 
  const params = useParams();
    const productId = params.id;
    console.log(productId);

    const productData = productsArr.find(product => product.id === parseInt(productId));

  useEffect(() => {
    // Retrieve the product data from a database or API
  
    console.log(productData);
    setProduct(productData);
  }, [match]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1 className="my-4">{product.title}</h1>
      <Row>
        {product?.images?.map((image, index) => (
          <Col key={index} md={4} className="mb-4"> 
            <Image src={image} 
            alt={`Image ${index}`} 
            fluid />
         </Col>
        ))}
      </Row>
     <h3>Reviews:</h3>
      {product.reviews.map((review, index) => (
        <div key={index}>
          <div>Review Text: {review.text}</div>
  <div>Review Rating: {review.rating}</div>
  <div>Review Author: {review.author}</div>
  <hr></hr>
        </div>
      ))} 
    </Container>
  );
};

export default ProductDetails;