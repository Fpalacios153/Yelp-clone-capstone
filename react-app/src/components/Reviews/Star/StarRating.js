// import { useState } from 'react'
import './StarRating.css'

export default function StarRating({ rating, setRating, setHover, hover }) {
    const ratings = ['1', '2', "3", "4", "5"]

    return (
        <>
            <div className='star-rating-container'>
                {ratings.map(star => (
                    <div key={star}
                        style={{ width: '2.4em' }}
                        // when you go over a star it highlights
                        onMouseEnter={() => setHover(star)}
                        // when it leaves it stays on the rating selected if selected
                        onMouseLeave={() => setHover(rating)}>
                        <button
                            key={star}
                            type="button"
                            id='rating-button'
                            onClick={() => setRating(star)}
                            className={star <= ((rating && hover) || hover || rating) ? 'selected' : 'notSeleted'}
                        >
                            <div className='star-container'>
                                <i className="fa fa-star fa-xl" aria-hidden="true"></i>
                            </div>
                        </button>
                    </div>
                ))}
                <div className='start-side-saying'>
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
                </div>


            </div>
        </>
    )
}
