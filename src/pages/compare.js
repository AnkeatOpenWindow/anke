import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";
import BarChart from '../components/BarChart';
import RadarChart from "../components/RadarChart";
import PieChart from "../components/PieChart";
import { Radar } from "react-chartjs-2";


function Compare(){

    
    return(

        <div className="App">
             <h1>Compare</h1>
            <Card style={{ width: '80%', margin: '10%', paddingTop: '20'}}> 
                    <div style={{width: 900, marginLeft: 50, marginBottom:10 }}>
                        <BarChart/>
                    </div>

                    <div style={{width: 700, marginLeft: 150,marginBottom:10  }}>
                        <RadarChart/>
                    </div>

                    <div style={{width: 700, marginLeft: 150, marginBottom:10  }}>
                        <PieChart/>
                    </div>

            </Card>
    </div>
        
        
        
    )
}
export default Compare;