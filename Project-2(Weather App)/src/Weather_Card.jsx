import { useEffect, useState } from "react"
import "../src/Card.css"


const API_KEY = "ed4b642238b12ff26219bc42827773c8"

// const city = "Delhi"

const Weather_Card = ()=> {
    const [data,setData] = useState(null)
    const [city,setCity] = useState("")
    const [searchCity,setSearchCity] = useState("")

    const currDate = new Date();
    const monthLists = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    // this is for binding the month number and month name together

    const day = currDate.getDate()
    const month = monthLists[currDate.getMonth()]
    const year = currDate.getFullYear()

    const formattedData = `${month} ${day},${year}`

    
    // searchcity will contain the actual city name which we wanted to search else TOO MANY API CALLS will happen which is not a good thing(if we type D then API CALL -> De then API CALL -> Del then API CALL and so on....)

    //Debouncing means: "Wait for user to stop typing, then call API once”


    useEffect(()=>{
        if(!searchCity){
            return
        }
        else{
            const fetchData = async()=>{
                try {
                   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                   const finData = await res.json()
                   setData(finData)
                    
                } catch (err) {
                    console.error(err)
                }
            }
            console.log(data)
            fetchData()
        }

    },[searchCity])

    return (
        <div className="main_cont">
            <h1>WEATHER APP</h1>
            {data && 
            <div className="main_data">
              <p className="DateInfo">{formattedData}</p>  
              <p className="DateInfo">{data.name}</p>
              <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
              <p className="tempData">{data.main.temp}</p>
              <p className="tempData">{data.weather[0].main}</p>
            </div>
            }
            <div className="inputsearch">
                <input type="text" name="myCity" id="mycity" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                <button onClick={()=>{setSearchCity(city)}}>Get</button>
            </div>
        </div>
    )
}

export default Weather_Card


// input box -> place name -> search button(fetch data) using useEffect() and weather API