import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {Container, Row, Col } from "react-bootstrap";

function Compare(){

    const [apiData, setApiData] = useState([]);
    
    const [missionName, setMissionName] = useState("Loading")
    const [missionPatch, setMissionPatch] = useState("")
    const [launchYear, setLaunchYear] = useState("")
    const [launchSuccess, setLaunchSuccess] = useState("")

    useEffect(()=>{
        //add API in ('')
        axios.get('')
        .then((response) => {
            console.log(response);
            //Can play around with "0" to change it to another number
            const index = 0;
            setApiData(response.data)
            setMissionName(response.data[index].mission_name)
            setMissionPatch(response.data[index].links.mission_patch)
            setLaunchYear(response.data[index].launch_year)
            if (response.data[index].launch_success) {
                setLaunchSuccess("Success")
            }else{
                setLaunchSuccess("Failed")
            }

        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return(

        <div className="App">
        <Card style={{ width: '80%', margin: '10%'}}>
            <Card.Img variant="top" src={missionPatch} style = {{width: '20%', marginLeft: '40%'}} />
            <Card.Body>
                <Card.Title>{missionName}</Card.Title>
                <Card.Text>
                Launch Year: {launchYear} <br />
                Launch Success: {launchSuccess} <br />
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
        
        
        
    )
}
export default Compare;