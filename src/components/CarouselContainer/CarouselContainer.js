import Carousel from 'react-bootstrap/Carousel';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Learn React JS</h3>
          <p>Create Single-page Application With Your Own Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Learn Git & Github</h3>
          <p>Share Your Code All Over the World</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Learn Web Designing</h3>
          <p>
            Be Professional On Web Designing
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;