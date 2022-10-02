import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../store/review'

export default function AllReviews() {
    const dispatch = useDispatch()
    const reviews = useSelector(state => state.reviews)
    const [loaded, setLoaded] = useState(false)
    const reviewArr = Object.values(reviews)

    useEffect(() => {
        dispatch(getAllReviews()).then(() => setLoaded(true))
    }, [])
    return loaded ? (
        <>
            <div>
                All Reviews
                {reviewArr.map(review => (
                    <div key={review.id}>
                        {review.rating} {review.review}
                    </div>
                ))}
            </div>
        </>
    ) : null
}
