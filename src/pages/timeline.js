import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";
import LineChart from "../components/LineChart";

function Timeline(){
       return(
        <div className="App">
        <Card style={{ width: '80%', margin: '10%'}}>
            <Card.Body>
            <div style={{width: 1000}}>
                <h1>Time Line</h1>
                <LineChart/>
            </div>
            </Card.Body>
        </Card>
    </div>
        
        
        
    )
}
export default Timeline;




