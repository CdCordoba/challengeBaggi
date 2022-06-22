import React from 'react';
import Stars from './Stars';
import './styles.css'
export default function Filters() {
    return (
        <div className='filters'>
            <h4>search by rating</h4>
            <Stars />
        </div>
    )
}
