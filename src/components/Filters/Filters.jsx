import React from 'react';
import Stars from './Stars';
import './styles.css'
export default function Filters() {
    return (
        <div className='filters'>
            <h4>Filter Movies by stars!</h4>
            <Stars />
        </div>
    )
}
