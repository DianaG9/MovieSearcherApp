import './styles/_app.scss'
import { useEffect, useState, useRef} from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import Footer from './components/Footer'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect( () => {

    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('Empty movie')
      return
    }

    if (search.length < 3){
      setError('Must writte at least 5 characters')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function App() {

const {search, updateSearch, error} = useSearch()
const {movies, getMovies, loading} = useMovies({search})

const handleSubmit = (event) => {
  event.preventDefault()
  getMovies()
}

const handleChange = (event) => {
  updateSearch(event.target.value)
}

  return (
    <>
      <div className="page">

        <header>
        <h1>Movies App</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
            style={ {
              border:'1px solid transparent',
              borderColor: error ? 'red': 'transparent'
            } }
            onChange={handleChange} value={search} name="query" placeholder='Harry Potter, Avengers, Star Wars...'/>
            <button type="submit">Search</button>
          </form>
          {error && <p style={{color:'red'}}>{error} </p> }
        </header>
        <main>
          {loading ? <p>Loading...</p> : <Movies movies={movies} />}
        </main>
      </div>
      {/* <Footer />  */}
    </>
  )
}

export default App