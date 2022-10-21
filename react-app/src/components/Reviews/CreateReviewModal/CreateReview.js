import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllBusinesses } from "../../../store/business"
import { createAReview } from "../../../store/review"
import StarRating from "../Star/StarRating"
import './CreateReview.css'

export default function CreateReview({ setShowModal }) {
    const dispatch = useDispatch()
    // const history = useHistory()
    const { businessId } = useParams()

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    // const [userId, setUserID] = useState('')
    // const [businessId, setBusinessID] = useState('')
    const currentUser = useSelector(state => state.session.user)

    // const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    const reviewCheck = useSelector(state => state.businesses[businessId])
    const reviewArray = reviewCheck.reviews
    useEffect(() => {
        let error = []
        if (review.length > 1000) error.push('error:Review must be less than 1000 characters')
        reviewArray?.forEach(review => {
            if (currentUser.id === review.userId) {
                error.push('error: User can only leave one review per business')
            }
        })
        setErrors(error)
    }, [review, rating, reviewArray, currentUser.id])

    // const ratings = ['1', '2', "3", "4", "5"]
    const [hover, setHover] = useState(0)


    const onSubmit = async (e) => {
        e.preventDefault()

        const newReview = {
            review,
            rating,
            userId: currentUser.id
        }
        if (!errors.length) {

            let data = await dispatch(createAReview(businessId, newReview, currentUser));

            if (Array.isArray(data)) {
                setErrors(data)
            } else {
                // await history.push(`/businesses/${data.id}`)
                //probably just add close modal
                // await dispatch(getAllReviews())
                await dispatch(getAllBusinesses())
                await setShowModal(false)
            }
        }

    }

    return (
        <>
            <div className="review-from-title">
                Write Review
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
                            <button className="review-form-submit-button" type="submit">Post Review</button>
                            <button className="review-form-submit-button" type="button" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
