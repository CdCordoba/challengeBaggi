import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieCards from '../MovieCards/MovieCards';
import Filters from '../Filters/Filters';

export default function Home() {
    return (
        <div>
            <SearchBar />
            <Filters />
            <MovieCards />
        </div>
    )
}
