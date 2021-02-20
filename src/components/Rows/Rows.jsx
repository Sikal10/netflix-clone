import React, {useEffect, useState} from 'react';
import "./Rows.css";
import axios from "../../axios";

const Rows = ({title, isLargeRow = false ,fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original"

    const getMovieUrl = async () => {
        const requests = await axios.get(fetchUrl);
        const {data: {results}} = requests;
        setMovies(results)
        return requests;
    }

    useEffect(() => {
        getMovieUrl()
    }, []);

    return (
        <div className={"row"}>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                        <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                    ))
                 )}
            </div>
        </div>
    );
};

export default Rows;