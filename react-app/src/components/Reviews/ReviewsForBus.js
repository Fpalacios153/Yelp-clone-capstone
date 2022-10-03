import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { deleteAReview, getAllReviews } from '../../store/review'

export default function ReviewsForOneBus() {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const [loaded, setLoaded] = useState(false)
    const reviews = useSelector(state => state.reviews)
    const reviewArr = Object.values(reviews).filter(review => +review.businessId === +businessId)

    useEffect(() => {
        dispatch(getAllReviews()).then(() => setLoaded(true))
    }, [])
    const toDelete = async (id) => {
        await dispatch(deleteAReview(id))
    }
    return loaded ? (
        <>
            <div>
                {reviewArr.map(review => (
                    <div key={review.id}>
                        <NavLink to={`/reviews/${review.id}`}>{review.rating}  |  {review.review}</NavLink>
                        <div>
                            <button onClick={() => toDelete(review.id)}>DELETE</button>
                        </div>
                    </div>

                ))}

            </div>
        </>
    ) : null
}