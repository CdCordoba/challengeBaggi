import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { getAllMovies, getMovieBySearch } from '../../redux/actions';
import './styles.css'

export default function SearchBar() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search.length ?
            dispatch(getMovieBySearch(search))
            : dispatch(getAllMovies());
        setSearch('')
    }
    return (
        <div className='searchbar'>
            <form >
                <input type="search" className="search" placeholder='Search a movie...' value={search} onChange={(e) => handleChange(e)} />
                <button onClick={(e) => handleSubmit(e)}>
                    <FaSistrix size={25} />
                </button>
            </form>
        </div>
    )
}
