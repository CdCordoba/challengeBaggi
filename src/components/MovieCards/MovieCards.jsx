import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../redux/actions';
import './styles.css';

export default function MovieCards() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch]);
    const movies = useSelector(state => state.movies)
    return (
        <div className='movies__container'>
            {console.log(movies.results)}
            {movies.results?.length && movies.results?.map(movie => {
                return (
                    <div className='movies'>
                        <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} />
                    </div>

                )
            })}
        </div>
    )
}
