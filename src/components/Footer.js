import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Card className="bg-dark text-white" style ={{marginBottom:10}}>
                <Card.Img style={{height:300}} src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={{fontSize:30}}>Music Compare</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <b>Address:</b> 1297 John Vorster Dr, Southdowns, Centurion, 0169 <br />
                                    <b>Phone:</b> 012 648 9200 <br />
                                    <b>Email:</b> info@openwindow.co.za
                                </Col>
                                <Col> <b>Hours:</b> <br />
                                        Sunday Closed <br />
                                        Monday 8am-4pm <br />
                                        Tuesday 8am-4pm <br />
                                        Wednesday 8am-4pm <br />
                                        Thursday 8am-4pm <br />
                                        Friday 8am-4pm <br />
                                        Saturday Closed <br />
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.ImgOverlay>

                   
        </Card>
      );
}

export default Footer

  
