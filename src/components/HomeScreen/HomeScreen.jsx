import React from 'react';
import "./HomeScreen.css";
import Header from "./Header/Header";
import Banner from "../Banner/Banner";
import Rows from "../Rows/Rows";
import requests from "../../requests";

const HomeScreen = () => {
    return (
        <div className={"HomeScreen"}>
            <Header />
            <Banner />
            <Rows title={"The Netflix Original"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Rows title={"Trending now"} fetchUrl={requests.fetchTrending} />
            <Rows title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
            <Rows title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
            <Rows title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
            <Rows title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
            <Rows title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
            <Rows title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default HomeScreen;