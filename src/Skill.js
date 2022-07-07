import React from 'react'
import './Skill.css'
import { Container, Row, Col} from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    AOS.init();

    return (
        <Container fluid id="Skills">
            <Row className="justify-content-center mt-5" >
                <Col xl={4} lg={4} md={5} sm={8} xs={8}>
                    <div  className="bars" data-aos="fade-right" data-aos-duration="2000">
                    <div className="info">
                        <span id="si">HTML</span>
                        
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26 }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={92} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>
                    
                    </div>
                    <div className="line html"></div>
                    </div>

                    <div  className="bars" data-aos="fade-right" data-aos-duration="2100">
                        <div className="info">
                            <span id="si">CSS</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26}}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={60} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>
                        
                        </div>
                        <div className="line css"></div>
                    </div>

                    <div  className="bars" data-aos="fade-right" data-aos-duration="2200">
                        <div className="info">
                            <span id="si">C</span>

                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26}}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={62} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line c"></div>
                    </div>

                    <div  className="bars" data-aos="fade-right" data-aos-duration="2300">
                        <div className="info">
                            <span id="si">C++</span>

                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26  }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={80} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line cpp"></div>
                    </div>

                    <div  className="bars" data-aos="fade-right" data-aos-duration="2400">
                        <div className="info">
                            <span id="si">JAVA</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26  }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={50} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line java"></div>
                    </div>

                    <div  className="bars" data-aos="fade-right" data-aos-duration="2500">
                        <div className="info">
                            <span id="si">javaScript</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26 }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={65} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line js"></div>
                    </div>

                </Col>
                <Col xl={1} lg={1}md={1}></Col>
                <Col xl={4} lg={4} md={5} sm={8} xs={8}>
                <div  className="bars" data-aos="fade-left" data-aos-duration="2000">
                    <div className="info">
                        <span id="si">PHP</span>
                      
                        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26, }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={77} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                    </div>
                    <div className="line php"></div>
                    </div>

                    <div  className="bars" data-aos="fade-left" data-aos-duration="2100">
                        <div className="info">
                            <span id="si">MySql</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26, }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={65} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line sql"></div>
                    </div>

                    <div  className="bars" data-aos="fade-left" data-aos-duration="2200">
                        <div className="info">
                            <span id="si">BootStrap</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26 }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={86} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line bs"></div>
                    </div>

                    <div  className="bars" data-aos="fade-left" data-aos-duration="2300">
                        <div className="info">
                            <span id="si">ReactJs</span>
                                
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26  }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={75} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line rj"></div>
                    </div>

                    <div  className="bars" data-aos="fade-left" data-aos-duration="2400">
                        <div className="info">
                            <span id="si">NodeJs</span>
                            
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26 }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={20} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line nj"></div>
                    </div>

                    <div  className="bars" data-aos="fade-left" data-aos-duration="2500">
                        <div className="info">
                            <span id="si">MangoDp</span>
                           
                            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                {({ isVisible }) => (
                                <div style={{ height: 26 }}>
                                <span id="si">{isVisible ? <CountUp style={{ color:'black' }} end={7} duration={5} /> : null}%</span>
                                </div>
                                )}
                            </VisibilitySensor>

                        </div>
                        <div className="line md"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Skill
