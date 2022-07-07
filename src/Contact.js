import React from 'react'
import './Contact.css'
import {Container,Row,Col,Form} from 'react-bootstrap'
import { IoLocationOutline } from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Contact extends React.Component{
    constructor(){
        super();
        this.state = {name:"",subject:"",body:""};
    }
    validateForm = event =>{
        var name=document.getElementById("name").value;
        var subject=document.getElementById("subject").value;
        var body=document.getElementById("body").value;
        window.location.href="mailto:ibhaudurrahman1999@gmail.com?name="+name+"&subject="+subject+"&body="+body;
        event.preventDefault();
        return false;
    }

    render(){
    AOS.init();

        return(
            <Container fluid id="contacts">
        <Row className="justify-content-center" data-aos="fade-up" data-aos-duration="2000">
            <Col xl={3} lg={3} md={3} sm={6} xs={8}>
                <h3 id="h3"><b>IRsBlog</b></h3>
                <p id="cp">Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</p>
            </Col>
            <Col xl={3} lg={3} md={3} sm={6} xs={8}>
            <i><IoLocationOutline className="ico"/><span><p id="cp" style={{paddingLeft:"45px"}}>112, Pidari Kovil St, near Kunjamal School,Kudavasal, 612601</p></span></i>
                    
                    <HiOutlineMail className="ico"/> 
                    <p id="cp" style={{paddingLeft:"45px"}}>ibhaudurrahman1999@gmail.com</p>
                   
                    <span><RiPhoneLine className="ico"/><p id="cp" style={{paddingLeft:"45px"}}>+91 9715 106 426</p></span>
            </Col>
            <Col xl={4} lg={4} md={4} sm={8} xs={10}>
                <h1 style={{color:'white', textAlign:'center'}}>Mail Me</h1>

            <Form onSubmit={this.validateForm} target="_blank" method="GET">

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="subject" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>

                <Form.Group className="d-grid mb-3">
                <input type="Submit" className="butn"  id="navigation"/>
                </Form.Group>
  

            </Form>
            </Col>
        </Row>
        </Container>
        )
    }
}

export default Contact
