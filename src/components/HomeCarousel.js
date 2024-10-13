import Carousel from 'react-bootstrap/Carousel';
import wealth1 from '../resources/Wealth1.jpg';
import wealth2 from '../resources/Wealth2.jpg';
import wealth3 from '../resources/Wealth3.jpg';
import './HomeCarousel.css';

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img src={wealth1} alt="First slide" className="d-block w-100 carousel-image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={wealth2} alt="First slide" className="d-block w-100 carousel-image" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={wealth3} alt="First slide" className="d-block w-100 carousel-image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;