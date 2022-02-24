import React from 'react'
import './P1.css'
import {Container,Row,Col,Button,Image} from 'react-bootstrap'
import im1 from './Image/1.jpg'
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';



const P1 = () => {
    AOS.init();

    return (
       <Container fluid className="overlay" id="Home">
           <Container>
           <Row className="justify-content-center" id="ro">
           <Col xl={2} lg={3} md={3} sm={4} xs={6} id="two">
                <div data-aos="fade-down-right" data-aos-duration="2000" className="justify-content-center">
                <Image id="me" src={im1} thumbnail /> 
                </div>
               </Col>
               <Col xl={1} lg={1}></Col>
               
               <Col xl={5} lg={5} md={10} sm={10} xs={12} id="one" data-aos="fade-up-left" data-aos-duration="2000">
                   <p id="s">Hello, I am</p>
                   <p id="b">Ibhaudur Rahman</p>
                   <p id="av">And i'm a <span id="sp"></span></p>
                   <Link to="contact" smooth={true} duration={300}><Button variant="outline" id="but">Hire Me</Button></Link>
               </Col>
           </Row>
           </Container>
       </Container>
    )
}

export default P1
