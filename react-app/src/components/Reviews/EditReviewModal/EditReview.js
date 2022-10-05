import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getAllBusinesses } from "../../../store/business"
import { updateAReview } from "../../../store/review"

export default function UpdateReview({ setShowModal, reviewId }) {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { reviewId } = useParams()

    const reviews = useSelector(state => state.reviews)
    const reviewToBe = reviews[reviewId]

    const [review, setReview] = useState(reviewToBe?.review)
    const [rating, setRating] = useState(reviewToBe?.rating)
    const [userId, setUserID] = useState(reviewToBe?.userId)
    const [businessId, setBusinessID] = useState(reviewToBe?.businessId)

    const currentUser = useSelector(state => state.session.user)


    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([])


    const ratings = ['1', '2', "3", "4", "5"]

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

            // await history.push(`/businesses/${data.id}`)
            //probably just add close modal
        }

    }

    return (
        <>
            <div className="review-form-container">
                <div>
                    Edit Review
                </div>
                <div>
                    {errors.length > 0 && (
                        <div>
                            {errors.map((error, index) => (
                                <div key={index}>{error.split(':')[1]}</div>
                            ))}
                        </div>
                    )}
                </div>
                <form onSubmit={onSubmit}>
                    <div className="review-form-label-container">
                        <label>
                            Rating:
                            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option hidden  >Select Rating </option>
                                {ratings.map(rating => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </label>
                        <textarea
                            className="review-form-text-area"
                            type="text"
                            maxLength={1000}
                            name="review"
                            wrap="hard"

                            placeholder="Review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <div>
                            <button className="review-form-submit-button" type="submit">Post Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
