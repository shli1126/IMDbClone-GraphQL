import {useQuery} from '@apollo/client'
import gql from 'graphql-tag'

const FETCH_MOVIES_QUERY = gql`
    {
        getMovies {
            imdbId
            title
            releaseDate
            trailerLink
            genres
            poster
            backdrops
        }
    }
`
const Hero = () => {
    const { loading, data } = useQuery(FETCH_MOVIES_QUERY);
    const movies = data ? data.getMovies : [];
    console.log(movies)
    return (
        <div className="row">
            {loading ? (
                <p>Loading...</p>
            ) : (
                movies.map((movie) => (
                    <div key={movie.imdbId} className="col-md-4 mb-3">
                        <div className="card" style={{ maxWidth: '18rem' }}>
                            <img src={movie.backdrops[0]} className="card-img-top" alt="poster" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <a href={movie.trailerLink} className="btn btn-primary">
                                    See trailer
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
export default Hero
