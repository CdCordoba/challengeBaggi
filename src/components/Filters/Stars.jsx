import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { filterByStars, getAllMovies } from '../../redux/actions';
import "./styles.css";

export default function Stars() {
    const dispatch = useDispatch();
    const [starPressed, setStarPressed] = useState(0)

    function handleOnCLick(e, star) {
        e.preventDefault();
        for (let i = 1; i <= 5; i++) {
            let starMarked = document.getElementById(i);
            if (starPressed === star) {
                starMarked.classList.remove('starMarked');

            }
            else if (i <= star) {
                starMarked.classList.add('starMarked');
            } else {
                starMarked.classList.remove('starMarked');
            }
        }

        if (starPressed === star) {
            setStarPressed(0);
            dispatch(getAllMovies());
        }
        else {
            setStarPressed(star);
            dispatch(filterByStars(star));

        }

    }
    // function applyEvents() {
    //     for (let i = 1; i <= 5; i++) {
    //         try {

    //             let star = document.querySelector('.stars');
    //             star.addEventListener('mouseover', function (e) {
    //                 e.target.style.color = "gold";
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }

    return (
        <div className='stars__container'>
            <AiFillStar size={25} onClick={(e => handleOnCLick(e, 1))} className="stars" id={1} />
            <AiFillStar size={25} onClick={(e => handleOnCLick(e, 2))} className="stars" id={2} />
            <AiFillStar size={25} onClick={(e => handleOnCLick(e, 3))} className="stars" id={3} />
            <AiFillStar size={25} onClick={(e => handleOnCLick(e, 4))} className="stars" id={4} />
            <AiFillStar size={25} onClick={(e => handleOnCLick(e, 5))} className="stars" id={5} />
            {/* {applyEvents()} */}
        </div>
    )
}