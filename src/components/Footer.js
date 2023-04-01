import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Card className="bg-dark text-white" style ={{marginBottom:10}}>
                <Card.Img style={{height:300}} src="data:image/jpeg;base64,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" />
                    <Card.ImgOverlay>
                        <Card.Title style={{fontSize:30}}>Movie Compare</Card.Title>
                        <Card.Text >
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

  
