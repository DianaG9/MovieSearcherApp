import { useState } from 'react'
import withResults from '../responses/data.json'
import withoutResults from '../responses/error.json'

export function useMovies ({search}) {
    const [responseMovies, setResponseMovies] = useState([]) 
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
    } ))

    const getMovies = () => {
        if (search) {
            setResponseMovies(withResults)

        } else {
            setResponseMovies(withoutResults)
        }
    }

    return {movies:mappedMovies, getMovies}
}
