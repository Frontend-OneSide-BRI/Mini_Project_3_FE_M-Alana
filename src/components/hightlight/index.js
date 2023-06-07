import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css"

const apiKey = "1487e6da2b780246708f52464d6d0f05";
const baseURL = "https://api.themoviedb.org/3";
const imageURL = "https://image.tmdb.org/t/p/w500";

function Highlight() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`).then((res) => {
            setMovie(res.data.results)
        });
    }, []);

    return (
        <div class="bgcolor bg-gradient-to-t from-indigo-950">
            <div class="container">
                    {movie.map((movie) => (
                        <div class="box">
                            <div class="imgBx">
                                <img
                                    id="gambar"
                                    src={`${imageURL}${movie.poster_path}`} 
                                />
                            </div>
                            <div class="content">
                                <div>
                                    <h2>{movie.title}</h2>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))};
            </div>
        </div>
    )
}

export default Highlight;