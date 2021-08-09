import axios from './axios';
import React, { useState, useEffect } from 'react'
import "../css/row.css"

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
        
    }, [fetchUrl])

    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className="container" >
                {movies.map(movie => (
                    <img key={movie.id} className={`row-poster ${isLargeRow && 'large-poster'}`} src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
