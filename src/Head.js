import React from 'react'
import './Head.css'
import { useState } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-scroll'


const Head = () => {
  const [navbar, setNavbar]= useState(false);
    
    const changeBackground = () => {
      if(window.scrollY >= 60){
        setNavbar(true);
      }else{
        setNavbar(false);
      }
    };
   
    window.addEventListener('scroll',changeBackground);
    
    return (
        <Container fluid>
        <Navbar className={navbar ? 'navbar active' : 'navbar'} collapseOnSelect expand="lg" fixed="top">
        <Container>
        <Navbar.Brand><p className="logo">IRs<span>Blog</span></p></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav className="justify-content-center">
            <Link to="Home" smooth={true} duration={300} id="m">Home</Link>
            <Link to="ab" smooth={true} duration={300} id="m">About</Link>
            <Link to="Skill" smooth={true} duration={300} id="m">Skill</Link>
            <Link to="detail" smooth={true} duration={300} id="m">Personal Detail</Link>
            <Link to="contact" smooth={true} duration={300} id="m">Contact</Link>
      
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </Container>
        
    )
}

export default Head
