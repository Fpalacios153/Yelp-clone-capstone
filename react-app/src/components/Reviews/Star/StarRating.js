import { useState } from 'react'
import './StarRating.css'

export default function StarRating({ rating, setRating, setHover, hover }) {
    const ratings = ['1', '2', "3", "4", "5"]

    // const diffSayings = () => {
    //     if (hover === 5) {
    //         <div>Great</div>
    //     } else if (hover === 4) {
    //         <div>Good</div>
    //     } else if (hover === 3) {
    //         <div>Good</div>
    //     } else if (hover === 2) {
    //         <div>Good</div>
    //     } else if (hover === 1) {
    //         <div>Good</div>
    //     } else {
    //         <div>Select your rating</div>
    //     }
    // }


    return (
        <>
            <div className='star-rating-container'>
                {ratings.map(star => (
                    <div>
                        <button id='rating-button'
                            key={star}
                            className={star <= ((rating && hover) || hover) ? 'selected' : 'notSeleted'}
                            // sets rating to stars
                            onClick={() => setRating(star)}
                            // when you go over a star it highlights
                            onMouseEnter={() => setHover(star)}
                            // when it leaves it stays on the rating selected if selected
                            onMouseLeave={() => setHover(rating)}>
                            <div className='star-container'>
                                <i class="fa fa-star fa-xl" aria-hidden="true"></i>
                            </div>
                        </button>
                    </div>
                ))}
                <p className='start-side-saying'>
                    {(() => {
                        switch (hover) {
                            case "5": return "Great";
                            case "4": return "Good";
                            case "3": return "OK";
                            case "2": return "Could've been better";
                            case "1": return "Not good";
                            default: return "Select Your Rating";
                        }
                    })()}
                </p>


            </div>
        </>
    )
}
