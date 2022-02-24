import React from 'react'
import './Topic.css'
import { Container,Row,Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Topic = (props) => {
    AOS.init();
    return (
       <Container fluid id="about">
           <Row data-aos="fade-up" data-aos-duration="2000" >
            <Col lg={12}  id="text">
                <h1 id="bf" >
                    {props.Head}
                </h1>
                <p>
                    {props.con}
                </p>
                
            </Col>
        </Row>
       </Container>
    )
}

export default Topic
