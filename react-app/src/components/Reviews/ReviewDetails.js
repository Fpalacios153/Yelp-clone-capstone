import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteAReview, getAllReviews } from "../../store/review"
import UpdateReviewModal from "../Reviews/EditReviewModal"
// import UpdateReview from "./EditReview"

export default function ReviewDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const { reviewId } = useParams()

    const reviews = useSelector(state => state.reviews)
    const review = reviews[reviewId]

    useEffect(() => {
        dispatch(getAllReviews()).then(() => setIsLoaded(true))
    }, [dispatch])

    const toDelete = async (id) => {
        dispatch(deleteAReview(id))
        history.push('/businesses')

    }
    return isLoaded ? (
        <>
            <div>
                Review Details:
                <div>{review.id}</div>
                <div>Review: {review.review}</div>
                <div>Rating: {review.rating}</div>
                <div>User: {review.userId}</div>
                <div>Business: {review.businessId}</div>
            </div>
            <div>
                <UpdateReviewModal />
                <button onClick={() => toDelete(review.id)}>DELETE</button>
            </div>
        </>
    ) : null
}
