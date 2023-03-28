import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";


function Landing() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="App">
            <div style={{ marginBottom: 10 }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: 600 }}
                            src="data:image/jpeg;base64,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"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-center mt-5">
                            <h1>Movie Compare</h1>
                            <p>Welcome to Movie Compare.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </div>


            <Card className="bg-dark text-white" style={{ marginBottom: 10 }}>

                <Row>
                    <Col>
                        <Card.Title className="text-center mt-5"><h1>About</h1></Card.Title>
                        <Card.Text style={{ padding: 10 }}>
                            Here on Movie Compare we help you find the best movies by comparing them with other moivies.<br/>
                            Feel free to head over to our Compare page to get started to comapre your movies. <br />
                            We also have a timeline page where you can go see the popularity of your movies over the years.
                        </Card.Text>
                    </Col>
                    <Col style={{ marginBottom: 10, marginTop: 10 }}>
                        <div className='ratio ratio-21x9'>
                            <iframe src="https://www.youtube.com/embed/CTXtXxD-TYg" title="YouTube video" allowfullscreen></iframe>
                        </div>


                    </Col>
                </Row>
            </Card>

        </div>
    );
}


export default Landing;