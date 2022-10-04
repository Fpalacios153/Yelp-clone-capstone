import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getAllBusinesses } from "../../../store/business"
import { updateAReview } from "../../../store/review"

export default function UpdateReview({ setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { reviewId } = useParams()

    const reviews = useSelector(state => state.reviews)
    const reviewToBe = reviews[reviewId]

    const [review, setReview] = useState(reviewToBe.review)
    const [rating, setRating] = useState(reviewToBe.rating)
    const [userId, setUserID] = useState(reviewToBe.userId)
    const [businessId, setBusinessID] = useState(reviewToBe.businessId)

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
        let data = await dispatch(updateAReview(updateReview, reviewId));

        // console.log(data)
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
            <div> Edit Review
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
                    <label>
                        <label>
                            Rating:
                            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option disabled value={0}>Select Rating </option>
                                {ratings.map(rating => (
                                    <option key={rating} value={rating}>{rating}</option>
                                ))}
                            </select>
                        </label>
                        Review:
                        <input
                            type="text"
                            name="review"
                            placeholder="Review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                    </label>
                    {/* <label>
                        Rating:
                        <input
                            type="text"
                            name="rating"
                            placeholder="1-5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </label> */}
                    <button type="submit">Update review</button>
                </form>
            </div>
        </>

    )
}
