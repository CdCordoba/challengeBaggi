import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi'
import './styles.css';

export default function MovieCards() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch]);

    function handleOnClick(e) {
        e.preventDefault();
        dispatch(getAllMovies())
    }

    const movies = useSelector(state => state.movies);
    var notFound = useSelector(state => state.notFound);
    return (
        <div className={notFound ? 'notFound movies__container' : 'movies__container'}>

            {notFound ?
                <div className='loading'>
                    <BiError size={50} />
                    <p >Sorry, We couldn't find a movie with this title or rating...</p>
                    <div>
                        <button onClick={handleOnClick}>Show all movies</button>
                    </div>
                </div>
                :
                movies.results?.length ? movies.results?.map((movie) => {
                    return (
                        <Link to={`/movie/${movie.id}`}>
                            <div key={movie.id} className='movies'>
                                <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.original_title} />
                            </div>
                        </Link>
                    )
                })
                    :
                    <div className='loading'>
                        <img src='https://i.pinimg.com/originals/0e/26/ca/0e26caf0af80cafd5b3943736fa9565f.gif' />
                    </div>
            }
        </div>
    )
}
