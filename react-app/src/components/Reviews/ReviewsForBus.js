import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllBusinesses } from '../../store/business'
import { deleteAReview, getAllReviews } from '../../store/review'
// import { getAllUsers } from '../../store/user'
import AverageStarRating from '../AverageStarRating'
import EditReviewModal from './EditReviewModal'
import './ReviewofUsers.css'

export default function ReviewsForOneBus() {
    const dispatch = useDispatch()
    const { businessId } = useParams()

    const [loaded, setLoaded] = useState(false)

    const reviews = useSelector(state => state.reviews)
    const reviewArr = Object.values(reviews).filter(review => +review.businessId === +businessId)

    const currentUser = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(getAllReviews())
            .then(() => setLoaded(true))
    }, [dispatch])

    const toDelete = async (id) => {
        dispatch(deleteAReview(id))
        dispatch(getAllBusinesses())


    }
    return loaded ? (
        <>
            <div className='entire-review-container'>
                <div className='business-detail-title reviews-business-title'>Reviews</div>

                {reviewArr.length ? reviewArr.map(review => (
                    <div key={review.id} className="review-container">
                        <div className='review-top-container'>
                            <div className='review-pic-name-container'>
                                <img
                                    alt='review-profile-pic'
                                    className='review-profile-pic'
                                    src={review.user.profilePic}
                                    onError={e => { e.currentTarget.src = '/static/images/icons/defaultProfile.png' }}
                                />
                                <h3 style={{ paddingLeft: '.7em', whiteSpace: 'normal', wordBreak: 'break-all' }}>
                                    {review.user.firstName} {review.user.lastName[0]}.
                                </h3>
                            </div>
                            <div>

                                {currentUser.id === review.user.id ? (

                                    <div className='review-button-container'>
                                        <EditReviewModal reviewId={review.id} />
                                        <button className='review-button' onClick={() => toDelete(review.id)}>
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                ) : null
                                }
                            </div>
                        </div>
                        <div className='review-rating-review'>
                            <div style={{ paddingBottom: '7px' }}>
                                <AverageStarRating reviewAverage={review.rating} />
                                Rating: {review.rating}
                            </div>
                            <div>{review.review}</div>
                        </div>
                    </div>))
                    : (
                        <div className='no-review-show'>
                            <h2>No reviews yet!</h2>
                        </div>)}

            </div>
        </>
    ) : <h1>LOADING....</h1>
}
