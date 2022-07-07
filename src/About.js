import React from 'react'
import './About.css'
import { Container,Row,Col,Image } from 'react-bootstrap'
import jmc from './Image/jam.jpg'
import mgr from './Image/mg.jpg'
import vebbox from './Image/vb.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();

    return (
       <Container fluid id="abt">
           <Row className="justify-content-center mb-5" data-aos="fade-up" data-aos-duration="2100" id="r1">
               <Col xl={4} lg={5} md={8} sm={8} xs={10} data-aos="fade-up-right" data-aos-duration="2000">
                    <Image src={jmc} thumbnail/>
               </Col>
               <Col xl={4} lg={5} md={8} sm={8} xs={10} data-aos="fade-up-left" data-aos-duration="2000">
                   <h2 id="text">Jamal Mohammed College</h2>
                   <p id="pj">Jamal Mohamed College, was founded in 1951, an autonomous institution, affiliated to the Bharathidasan University, Tiruchirappalli. This is the Institute,Where i am learned My BCA course and got my UG Degree.</p>
               </Col>
           </Row>
           <Row className="justify-content-center mt-5" data-aos="fade-up" data-aos-duration="2100"  id="r2">
               <Col xl={{ order: 'first' ,span: 4}} lg={{ order: 'first' ,span: 5}} md={{ order: 'last' ,span: 8}} sm={8} data-aos="fade-up-right" data-aos-duration="2000" xs={{ order: 'last' ,span: 10}}>
                   <h2 id="text">Dr.MGR University</h2>
                   <p id="pj"> Dr. M.G.R. Engineering College was founded in 1988 . We acquired Deemed University status in 2003 as Dr. M.G.R. Educational and Research Institute as per the orders of the University. This is the Institute,Where i am learn My Master Degree PG MCA course.</p>
               </Col>
               <Col xl={{ order: 'last' ,span: 4}} lg={{ order: 'last' ,span: 5}} md={8} sm={8} xs={{ order: 'first' ,span: 10}} data-aos="fade-up-left" className="text-center justify-content-center" data-aos-duration="2200">
                    <Image src={mgr} thumbnail/>
               </Col>
           </Row>
           <Row className="justify-content-center mt-5" data-aos="fade-up" data-aos-duration="2100" id="r3">
               <Col xl={4} lg={5} md={8} sm={8} xs={10} data-aos="fade-up-right" data-aos-duration="2000">
                    <Image src={vebbox} thumbnail/>
               </Col>
               <Col xl={4} lg={5} md={8} sm={8} xs={10} data-aos="fade-up-left" data-aos-duration="2000">
                   <h2 id="text">VEBBOX Software Solutions</h2>
                   <p id="pj">Vebbox was founded in 2016 by Vignesh Venkadesan. This is the Software Solutions startup company,Where i am learned my MERN Stack course.</p>
               </Col>
           </Row>
       </Container>
    )
}

export default About