import React, {useEffect, useState} from 'react';
import axios from "../../axios"
import "./Banner.css";
import requests from "../../requests";

function getRandomMovie (n) {
    return Math.floor(Math.random() * (n-1));
}

const Banner = () => {
    const [movie, setMovie] = useState([]);

    const fetchMovies = async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);

        const {data: {results}} = request

        setMovie(results[getRandomMovie(results.length)])
        return request;
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    console.log("movie----------->", movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string
    }

    return (
        <div className={"banner"} style={{backgroundPosition: "center center",backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <div className="banner__contents">
                <h1 className={"banner__title"}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className={"banner__button"}>Play</button>
                    <button className={"banner__button"}>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 200)}
                    {/*{truncate(`${movie?.overview}`, 150)}*/}
                </h1>
            </div>

            <div className="banner__fadeBottom"/>


        </div>
    );
};

export default Banner;