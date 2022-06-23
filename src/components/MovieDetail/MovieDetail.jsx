import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { getAllMovies, getMovieDetail } from '../../redux/actions';
import MovieStars from '../MovieStars/MovieStars'
import './styles.css';

export default function MovieDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllMovies())
        dispatch(getMovieDetail(id))
    }, [dispatch]);

    function handleGoBack(e) {
        e.preventDefault();
        history.push(`/`)
    }

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const movie = useSelector(state => state.movieDetail)
    return (
        <div className='detail__container'>
            <button onClick={handleGoBack}><RiArrowGoBackFill style={{ marginRight: '5px' }} /> GO BACK</button>
            <h1>{movie?.original_title}</h1>
            <div className='movieDetail'>
                <div>
                    <img src={`${IMG_URL}${movie?.poster_path}`} alt={movie?.original_title} />
                </div>
                <div className='info'>
                    <div className='info__stars'>
                        <p>Score: </p>
                        <MovieStars score={Math.ceil(movie?.vote_average / 2)} />
                    </div>
                    <p>Release date: {movie?.release_date}</p>
                    <p>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}
