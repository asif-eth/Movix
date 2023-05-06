import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzY5YTQ5OTMxMDJjNDYzYTVkZDZlM2Y2ZWQ3ZDUwZiIsInN1YiI6IjY0NGNmODY0NWUxNGU1MDRiOGI4ODBhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yhNvdI4meM-04jJuV_7Gum64l9MuVGQkHPMjgLTVvf4"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url,params) => {

    try{
        const {data} = await axios.get
        (BASE_URL + url, {
            headers,
            params,
        })
        return data;
    }

    catch(err){
        console.log(err);
        return;
    }
};