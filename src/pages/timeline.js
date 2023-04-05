import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";
import LineChart from "../components/LineChart";

function Timeline(){
       return(
        <div className="App">
            <h1>Timeline</h1>
            <Card style={{ width: '80%', margin: '10%', paddingTop: '20'}}>
                <div style={{width:'900', height:'900'}}>
                    <LineChart/>
                </div>
            </Card>
        </div>
    )
}
export default Timeline;




