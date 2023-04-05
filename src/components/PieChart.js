import React, {useState, useEffect} from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'


ChartJS.register(
    ArcElement, Tooltip, Legend
)

const PieChart = () => {
    const [chart, SetChart] = useState ()
    const [labels, setLabels] = useState([])
    const [date, setDate] = useState([])


    var baseURL = "https://api.themoviedb.org/3/discover/movie?/?limite=10"
    var proxyURL = 'https://cors-anywhere.herokuapp.com/'
    var apiKey = "3279c904afffb32c9958ddb64fb776fa&with_genres=27"
    

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
            const releaseDate = response.data.results.map(({vote_count}) => vote_count)
            console.log(releaseDate);
            setLabels(movieLabels)
            setDate(releaseDate)
        })
        .catch((err) => {
            console.log(err);
        })

    },[])

    var data = {
        labels: labels,
        datasets: [{
            label: 'Vote Count',
          data: date,
          backgroundColor: [
            'rgba(255,0,0)',
            'rgba(0,255,0)',
            'rgba(0,0,255)',
            'rgba(255,255,0)',
            'rgba(0,255,255)',
            'rgba(255,0,255)',
            'rgba(192,192,192)',
            'rgba(128,128,128)',
            'rgba(128,128,0)',
            'rgba(0,128,0)',

            'rgba(128,0,128)',
            'rgba(0,128,128)',
            'rgba(0,0,128)',
            'rgba(128,0,0)',
            'rgba(0,250,154)',
            'rgba(224,255,255)',
            'rgba(100,149,237)',
            'rgba(65,105,225)',
            'rgba(139,0,139)',
            'rgba(188,143,143)',
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
            beginAtZero: true
          }
        },
        legend:{
            lables:{
                fontSize: 26
            }
        }
    }
  return (
    <div>
        <Pie
            data= {data}
            options= {options}
        />
    </div>
  )
}

export default PieChart