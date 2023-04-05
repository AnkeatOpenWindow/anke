import React, {useState, useEffect, useRef} from 'react'
import {Chart as ChartJS, LineElement, PointElement ,CategoryScale, LinearScale} from 'chart.js'
import { Line } from 'react-chartjs-2'
import axios from 'axios'


ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {
    const [chart, SetChart] = useState ()
    const [labels, setLabels] = useState([])
    const [date, setDate] = useState([])
    
    // const selectRef= useRef("");
    const [inputValue, setInputValue] = useState("avg");

    var baseURL = "https://api.themoviedb.org/3/discover/movie?/?limite=10"
    var proxyURL = 'https://cors-anywhere.herokuapp.com/'
    var apiKey = "3279c904afffb32c9958ddb64fb776fa&with_genres=27"
    
    useEffect(() =>{
      console.log(inputValue);
    },[inputValue])

    useEffect(()=>{
      let query = "movie";
      const apiKey = "3279c904afffb32c9958ddb64fb776fa";
        // const fetchMovies = async () => {
        //     await fetch('${proxyURL}${baseURL}', {
        //         method:'GET',
        //         headers:{
        //             'Content-Type': 'application/json',
        //             'x-access-token' : '${apiKey}',
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     }).then((response) =>{
        //         response.json().then((jason)=>{
        //             console.log(jason)
        //         })
        //     }).catch(error =>{
        //         console.log(error);
        //     })
        // }

        // fetchMovies()

        axios.get('https://api.themoviedb.org/3/discover/'+query+'?api_key=' +apiKey+ '&with_genres=27')
        .then((response) => {
          console.log(response.data);
          const movieLabels = response.data.results.map(({original_title}) => original_title)
          let releaseDate = [];
          if (inputValue == "avg"){
             releaseDate = response.data.results.map(({vote_average}) => vote_average)
          } 
          else if (inputValue == "count"){
            releaseDate = response.data.results.map(({vote_count}) => vote_count)
          }
          console.log(releaseDate);
          setLabels(movieLabels)
          setDate(releaseDate)
      })
      .catch((err) => {
          console.log(err);
      })

    },[inputValue])

    var data = {
        labels: labels,
        datasets: [{
          label: 'Average vote and Vote count',
          data: date,
          backgroundColor: [
            'rgba(173, 216, 230)'
          ],
          borderColor: [
            'rgba(173, 216, 230)'
          ],
          borderWidth: 1
        }]
      }
      
       var options = {
        maintianAspectRatio: false,
        scales: {
          y: {
            // beginAtZero: true,
            ticks: {
              min: 0,
              max: 10,
              stepSize: 0.2,
              // callback: (value, index, values) => {
              //   // console.log(value, values);
              //   return value;
              // },
            }
          }
        },
        legend:{
            lables:{
                fontSize: 26
            }
        },
        interaction: {
          mode: 'point'
      }
    }
  return (
    <div>
        <select name="myName" id="myId" onChange={(e) => setInputValue(e.target.value)}>
          <option value="avg">Average vote</option>
          <option value="count">Vote count</option>
        </select>

        <Line
            data= {data}
            options= {options}
        />
    </div>
  )
}

export default LineChart