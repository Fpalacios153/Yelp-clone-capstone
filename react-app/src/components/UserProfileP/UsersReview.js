import './UsersReview.css'
import { NavLink } from "react-router-dom"
import EditReviewModal from '../Reviews/EditReviewModal'
import { useDispatch } from 'react-redux'
import { deleteAReview } from '../../store/review'
import { getAllBusinesses } from '../../store/business'
import AverageStarRating from '../AverageStarRating'
export default function UsersReview({ usersReview, usersName, business }) {
    const dispatch = useDispatch()


    let findReviewName = (businessId) => {
        let found = business?.find(bus => {
            return bus.id === businessId
        })
        return found.name
    }
    const toDelete = async (id) => {
        await dispatch(deleteAReview(id))
        await dispatch(getAllBusinesses())


    }
    return (
        <>
            {/* <div>Users Reviewsß go here</div> */}
            <div className='entire-user-review-container'>
                <h4 className='user-review-top-title'>
                    {usersName}'s Reviews
                </h4>
                {usersReview.map(review => (
                    <div key={review.id} className="user-review-container">
                        <div className='user-review-top-container'>
                            <div className='review-business-name'>Review for {' '}
                                <NavLink className='user-review-return-to-bus' to={`/businesses/${review.businessId}`}>
                                    {findReviewName(review.businessId)}
                                </NavLink>
                            </div>

                            <div>
                                <div className='review-button-container'>
                                    <EditReviewModal reviewId={review.id} />
                                    <button className='review-button' onClick={() => toDelete(review.id)}>
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='user-review-rating-review'>
                            <div style={{ paddingBottom: '7px' }}>
                                <AverageStarRating reviewAverage={review.rating} />
                                Rating:
                                <span style={{ color: 'rgba(224, 7, 7, 1)' }}>{' ' + review.rating}</span>
                            </div>
                            <div className='user-review-review'>{review.review}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
