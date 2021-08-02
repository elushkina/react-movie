import {API_KEY, API_URL} from "./config";

export const fetchMovies = (page = 1) => {
    return fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(response => response.json())
}

