import React from 'react';
import { Button ,Container} from 'react-bootstrap';

const Home = () => {
  const tourData = [
    {
      date: 'JUL16',
      location: 'DETROIT, MI',
      venue: 'DTE ENERGY MUSIC THEATRE',
      link: 'https://example.com/buy-tickets'
    },
    {
      date: 'JUL19',
      location: 'TORONTO, ON',
      venue: 'BUDWEISER STAGE',
      link: 'https://example.com/buy-tickets'
    },
    {
      date: 'JUL22',
      location: 'BRISTOW, VA',
      venue: 'JIGGY LUBE LIVE',
      link: 'https://example.com/buy-tickets'
    },
    {
      date: 'JUL29',
      location: 'PHOENIX, AZ',
      venue: 'AK-CHIN PAVILION',
      link: 'https://example.com/buy-tickets'
    },
    {
      date: 'AUG2',
      location: 'LAS VEGAS, NV',
      venue: 'T-MOBILE ARENA',
      link: 'https://example.com/buy-tickets'
    },
    {
      date: 'AUG7',
      location: 'CONCORD, CA',
      venue: 'CONCORD PAVILION',
      link: 'https://example.com/buy-tickets'
    }
  ];

  return (
    <>
      <div className="bg-secondary py-3 text-center mb-4" style={{ height: '200px' }}>
           <h1 className="text-white" style={{ fontSize: '100px' , fontFamily: 'Times New Roman, sans-serif'}}>The Generics</h1>
          </div>
    <h2 className='text-center mb-5'>Tours</h2>
    <Container className='mb-5'>
    <ul className="list-unstyled">
      {tourData.map((tour, index) => (
        <li key={index} className="d-flex justify-content-between align-items-center my-3 border-bottom">
          <div>{tour.date}</div>
          <div>{tour.location}</div>
          <div>{tour.venue}</div>
          <Button variant="primary" href={tour.link}>BUY TICKETS</Button>
        </li>
      ))}
    </ul>
    </Container>
    </>
  );
};

export default Home;