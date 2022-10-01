import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { createAReview } from "../../store/review"

export default function CreateReview() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { businessId } = useParams()

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [userId, setUserID] = useState('')
    // const [businessId, setBusinessID] = useState('')
    const currentUser = useSelector(state => state.session.user)

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([])


    const ratings = ['1', '2', "3", "4", "5"]

    const onSubmit = async (e) => {
        e.preventDefault()

        const newReview = {
            review,
            rating,
            userId: currentUser.id
        }
        let data = await dispatch(createAReview(businessId, newReview));

        console.log(data)
        if (Array.isArray(data)) {
            setErrors(data)
        } else {
            // await history.push(`/businesses/${data.id}`)
            //probably just add close modal
        }

    }

    return (
        <>
            <div> Write Review
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
                    <button type="submit">Add review</button>
                </form>
            </div>
        </>

    )
}
