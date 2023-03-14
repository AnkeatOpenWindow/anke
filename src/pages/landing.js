import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";


function Landing(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
       
    return(
        <div className="App">
            <div style ={{marginBottom:10}}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:600}}
                    src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg" 
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-center mt-5">
                        <h1>Music Compare</h1>
                        <p>Welcome to Music Compare.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='ratio ratio-21x9'>
                        <iframe src="https://www.youtube.com/embed/khADqsOm-iU" title="YouTube video" allowfullscreen></iframe>
                    </div>
                

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='ratio ratio-21x9'>
                            <iframe src="https://www.youtube.com/embed/cn5Ylr33Wvc" title="YouTube video" allowfullscreen></iframe>
                    </div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>


            <Card className="bg-dark text-white" style ={{marginBottom:10}}>
                
                    <Row>
                        <Col>
                            <Card.Title className="text-center mt-5"><h1>About</h1></Card.Title>
                                <Card.Text style ={{padding:10}}>
                                    Here on Music Compare we help you find the best songs by comparing them with other songs.<br /> 
                                    Feel free to head over to our Compare page to get started to comapre your songs. <br />
                                    We also have a timeline page where you can go see the popularity of your songs over the years.
                                </Card.Text>
                        </Col>
                        <Col style ={{marginBottom:10, marginTop:10}}>
                            <div className='ratio ratio-21x9'>
                                <iframe src="https://www.youtube.com/embed/F1-3PshgtxY" title="YouTube video" allowfullscreen></iframe>
                            </div>

                            
                        </Col>
                    </Row>
            </Card>

    </div>
  );
}


export default Landing;