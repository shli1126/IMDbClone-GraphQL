import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";

const FETCH_MOVIE_QUERY = gql`
     query {
        getMovies {
            imdbId
            title
        }
    }
`
const Home = () => {
    const { loading, error, data } = useQuery(FETCH_MOVIE_QUERY);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { getMovies } = data;

    // if (!Array.isArray(getMovies) || getMovies.length === 0) {
    //     return <div>No movies available</div>;
    // }
    // if (!Array.isArray(getMovies)) {
    //     return <div>No movies available</div>;
    // }

    return (
        <div>
            {getMovies.map((movie) => (
                <div key={movie.imdbId}>
                    {movie.title}
                </div>
            ))}
        </div>
    );
}

export default Home;

