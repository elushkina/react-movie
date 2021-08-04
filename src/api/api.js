import {API_KEY, API_URL, IMAGE_URL} from "./config";

export const fetchMovies = (page) => {
    return fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=ru&page=${page}`)
        .then(response => response.json())
}

export const getPhotoPreview = (photoPath) => (`${IMAGE_URL}w200${photoPath}`)

export const fetchMovieDetails = (id) => {
    return fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ru`)
        .then(response => response.json())
        .catch(() => console.log('fetch movie details failed'))
}

export const fetchAboutMovie = (id) => {
    return fetch (`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=ru`)
        .then(response => response.json())
        .catch(() => console.log('fetch movie  failed'))
}

export const getMoviePoster = (posterPath) => (`${IMAGE_URL}w1280${posterPath}`)