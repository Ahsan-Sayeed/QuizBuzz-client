import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom';

const NavigationBar = () => {
    return (<NavScrollExample></NavScrollExample>);
};


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" style={{  position: "sticky",top:0 ,zIndex:100}} className="shadow">
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none'><b>QuizBuzz</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  style={{alignContent:"flex-end",flexDirection: "column-reverse",flexWrap: 'wrap' }}>
          
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>
            <NavLink to='/' className='text-decoration-none mx-2' style={({isActive})=>isActive?{color:'red'}:undefined}>Topics</NavLink>
            <NavLink to='/statistics' className='text-decoration-none mx-2' style={({isActive})=>isActive?{color:'red'}:undefined}>Statistics</NavLink>
            <NavLink to='/blogs' className='text-decoration-none mx-2' style={({isActive})=>isActive?{color:'red'}:undefined}>Blog</NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavigationBar;