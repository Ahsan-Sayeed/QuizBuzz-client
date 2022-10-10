import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (<NavScrollExample></NavScrollExample>);
};


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none'>QuizBuzz</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  style={{alignContent:"flex-end",flexDirection: "column-reverse",flexWrap: 'wrap' }}>
          
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>
            <Link to='/' className='text-decoration-none mx-2'>Topics</Link>
            <Link to='/statistics' className='text-decoration-none mx-2'>Statistics</Link>
            <Link to='/blogs' className='text-decoration-none mx-2'>Blog</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavigationBar;