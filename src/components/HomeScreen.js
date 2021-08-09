import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Row from "./Row"
import requests from "./requests"
require('dotenv').config();
function HomeScreen() {
    return (
        <div className = "homeScreen">
            <Nav />

            <Banner />

            <Row 
                title = "NETFLIX ORIGINALS"
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow = {true}
            />
            <Row 
                title = "Top Rated"
                fetchUrl = {requests.fetchTopRated}
            />
            <Row 
                title = "Action Movies"
                fetchUrl = {requests.fetchActionMovies}
            />
            <Row 
                title = "Comedy Movies"
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Row 
                title = "Horror Movies"
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row 
                title = "Romance Movies"
                fetchUrl = {requests.fetchRomanceMovies}
            />
            <Row 
                title = "Documentaries"
                fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
