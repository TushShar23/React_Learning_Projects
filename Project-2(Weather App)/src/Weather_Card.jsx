import { useEffect, useState } from "react"
import "../src/Card.css"


const API_KEY = "ed4b642238b12ff26219bc42827773c8"

// const city = "Delhi"

const Weather_Card = ()=> {
    const [data,setData] = useState(null)
    const [city,setCity] = useState("")
    const [searchCity,setSearchCity] = useState("")
    
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
            {data && 
            <div>
              {data.name}
              {data.main.temp}
              {data.weather[0].main}
              <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
            </div>
            }
            <input type="text" name="myCity" id="mycity" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <button onClick={()=>{setSearchCity(city)}}>Get</button>
        </div>
    )
}

export default Weather_Card


// input box -> place name -> search button(fetch data) using useEffect() and weather API