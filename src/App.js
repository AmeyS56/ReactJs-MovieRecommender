
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

/// ce03089 --API Key (free waale gareeb Lok )

const API_URL = 'http://www.omdbapi.com?apikey=ce03089';
const movie1 = {
    
    
        "Title": "Ms. Marvel",
        "Year": "2022",
        "imdbID": "tt10857164",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`) ///URL la match krty te 
        const data = await response.json();
        setMovies(data.Search);

    }  ///Asynchronus takes time load the data.
    useEffect(()=>{
        searchMovies('Marvel');
    },[]);
    return (
        <div className="app">
            <h1>MovieBuff</h1>

            <div className="search">
                <input placeholder="Search Movies ezz :) "
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                 
                />
                <img src = {SearchIcon}
                    alt="search" 
                        onClick={()=>searchMovies(searchTerm)}
                    />
                    
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                          {movies.map((movie) => (
                            <MovieCard movie={movie} />
                          ))}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies Found</h2>
                        </div>
                )
            }
           
        </div>
    );
}

export default App;