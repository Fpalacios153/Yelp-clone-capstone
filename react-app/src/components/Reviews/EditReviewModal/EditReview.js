import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useHistory, useParams } from "react-router-dom"
import { getAllBusinesses } from "../../../store/business"
import { updateAReview } from "../../../store/review"
import StarRating from "../Star/StarRating"

export default function UpdateReview({ setShowModal, reviewId }) {
    const dispatch = useDispatch()
    // const history = useHistory()
    // const { reviewId } = useParams()

    const reviews = useSelector(state => state.reviews)
    const reviewToBe = reviews[reviewId]

    const [review, setReview] = useState(reviewToBe.review)
    const [rating, setRating] = useState(reviewToBe.rating)
    const [userId,] = useState(reviewToBe.userId)
    const [businessId,] = useState(reviewToBe?.businessId)
    const [errors, setErrors] = useState([])
    const [hover, setHover] = useState(0)

    // const [hasSubmitted, setHasSubmitted] = useState(false)

    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        let error = []
        if (review.length > 1000) error.push('error:Review must be less than 1000 characters')
        setErrors(error)
    }, [review])

    const onSubmit = async (e) => {
        e.preventDefault()

        const updateReview = {
            review,
            rating,
            userId,
            businessId
        }
        let data = await dispatch(updateAReview(updateReview, reviewId, currentUser));

        if (Array.isArray(data)) {
            setErrors(data)
        } else {
            //come back to this
            await dispatch(getAllBusinesses())
            await setShowModal(false)
        }

    }

    return (

        <>
            <div className="review-from-title">
                Edit Review
            </div>
            <div className="review-form-container">
                <div>
                    {errors.length > 0 && (
                        <div>
                            {errors.map((error, index) => (
                                <div key={index} className='error-text' >{error.split(':')[1]}</div>
                            ))}
                        </div>
                    )}
                </div>
                <form onSubmit={onSubmit}>
                    <div className="review-form-label-container">
                        <StarRating rating={rating} setRating={setRating} hover={hover} setHover={setHover} />
                        {/* <label>
                            Rating:
                            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option hidden  >Select Rating </option>
                                {ratings.map(rating => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </label> */}
                        <div className="review-text-area-container">
                            <textarea
                                className="review-form-text-area"
                                type="text"
                                maxLength={1001}
                                name="review"
                                wrap="hard"

                                placeholder="Review"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                            <span className="review-text-length">{review.length}/1000</span>

                        </div>
                        <div style={{ margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
                            <button className="review-form-submit-button" type="submit">Update Review</button>
                            <button className="review-form-submit-button" type="button" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
