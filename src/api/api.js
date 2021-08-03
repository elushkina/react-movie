import {API_KEY, API_URL, IMAGE_URL} from "./config";

export const fetchMovies = (page) => {
    return fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then(response => response.json())
}

export const getPhotoPreview = (posterPath) => (`${IMAGE_URL}w200${posterPath}`)