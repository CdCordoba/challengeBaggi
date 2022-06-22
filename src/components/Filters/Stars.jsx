import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import "./styles.css";
export default function Stars() {
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
        starPressed === star
            ? setStarPressed(0)
            : setStarPressed(star)
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
            <AiFillStar onClick={(e => handleOnCLick(e, 1))} className="stars" id={1} />
            <AiFillStar onClick={(e => handleOnCLick(e, 2))} className="stars" id={2} />
            <AiFillStar onClick={(e => handleOnCLick(e, 3))} className="stars" id={3} />
            <AiFillStar onClick={(e => handleOnCLick(e, 4))} className="stars" id={4} />
            <AiFillStar onClick={(e => handleOnCLick(e, 5))} className="stars" id={5} />
            {/* {applyEvents()} */}
        </div>
    )
}