import React, { useState } from 'react'
import "../css/banner.css"
import axios from "./axios"
import requests from "./requests"
import { useEffect } from 'react';

function Banner() {
    const [movie, setMovie] = useState({
        name: "",
        backdrop_path: "",
        overview: "",
        title: "",
        original_name: ""
    });

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * 20)])
            
            return request;
        }
        fetchData();
    }, [])
    
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    }


    return (
        <header className = "banner" style = {{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`, 
            backgroundPosition: "center center"}}
            >
            <div className="banner-content">
                <h1 className="banner-title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className= "banner-btns">Play</button>
                    <button className= "banner-btns">My list</button>
                </div>
                <h1 className="banner-description">{truncate(movie.overview, 150)}</h1>
            </div>
            <div className="fade" />
        </header>
    )
}

export default Banner
