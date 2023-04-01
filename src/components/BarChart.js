import React, {useState, useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
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
            const releaseDate = response.data.results.map(({vote_average}) => vote_average)
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
          label: 'Average vote',
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
        <Bar
            data= {data}
            options= {options}
        />
    </div>
  )
}

export default BarChart