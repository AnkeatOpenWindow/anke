import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";

function Timeline(){
       return(
        <div className="App">
        <Card style={{ width: '80%', margin: '10%'}}>
            <Card.Body>
                <Card.Text>
                 <h1>Timeline</h1> 
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
        
        
        
    )
}
export default Timeline;