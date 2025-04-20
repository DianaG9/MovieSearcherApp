
export function ListOfMovies({movies}) {

    return (
        <ul className="catalog">
        {
            movies.map(movie => (
            <li className="movies" key={movie.id} >
                <h3>{movie.title} </h3>
                <p>{movie.year} </p>
                <p>{movie.type} </p>
                <img src={movie.poster} alt={movie.title} />
            </li>
        
            ))
        }
        </ul>
    )
}


export function NoMoviesResult () {

    return (
        <p>No movie found</p>
    )
}

export function Movies ({movies}) {

    const hasMovies = movies?.length >0

    
    return (
        hasMovies 
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResult/>  
    )
}
