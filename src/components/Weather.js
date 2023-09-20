import React, { useEffect, useState } from 'react'
import {GoLocation} from "react-icons/go";
// import "./Weather.css"
import './Navbar.css'
const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune")

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3c15fc8769ce379ded4da4cc5d6c842c`
            const response = await fetch(url);

            const resJson = await response.json();

            setCity(resJson.main);
        }

        fetchApi();

    }, [search])

    return (
        <>
        <h1 className="head"> This is Weather App</h1>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className='inputField' onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location" className="">
                               <GoLocation className='icon'></GoLocation>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}°C
                                </h1>
                                <h3 className="tempmin_max">
                                    Min-  {city.temp_min}°C and Max-   {city.temp_max}°C
                                </h3>
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }

            </div>
        </>
    )
}
export default Weather;