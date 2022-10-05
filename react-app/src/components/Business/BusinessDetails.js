import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteABusiness, getAllBusinesses, getOneBusiness } from "../../store/business";
import CreateReviewModal from "../Reviews/CreateReviewModal";
// import CreateReview from "../Reviews/CreateReview";
import ReviewsForOneBus from "../Reviews/ReviewsForBus";
import UpdateBusinessModal from "./EditBusinessModal";
import './BusinessDetails.css'
import Footer from "../Footer";

export default function BusinessDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const { businessId } = useParams()

    const businesses = useSelector(state => state.businesses)
    const business = businesses[businessId]

    const currentUser = useSelector(state => state.session.user)
    //
    // const reviews = useSelector(state => state.reviews)
    // const reviewArr = Object.values(reviews).filter(review => +review.businessId === +businessId)

    // let numReview = reviewArr.length
    // let sumOfratings = 0
    // reviewArr.forEach(review => {
    //     sumOfratings += review.rating
    // })
    // let reviewAverage = sumOfratings / numReview


    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => setIsLoaded(true))
    }, [dispatch, businessId])

    const toDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteABusiness(businessId))
        history.push('/businesses')
    }
    return isLoaded ? (
        <>
            <div className="business-detail-container">
                <img className='business-detail-image' src={business.image}></img>
                <div className="business-detail-words-in-image">
                    <div>{business.name}</div>
                    <div className="business-detail-review">
                        {/* Average Rating: {reviewAverage} {numReview} reviews */}
                        Average Rating: {business.reviewAverage} - {business.reviewCount} reviews
                    </div>

                </div>
            </div >
            <div className="buisness-details-about-business">
                {currentUser.id === business.ownerId ? (
                    <div className="business-detail-review-container">
                        <UpdateBusinessModal />
                        <span style={{ paddingLeft: '10px' }}>
                            <button className="business-detail-UD-button" onClick={toDelete}>Delete Business</button>
                        </span>
                    </div>
                ) :
                    <div className="business-detail-review-container">
                        <CreateReviewModal />
                    </div>}
                <div className="business-detail-info-container">
                    <div className="business-detail-left-side">
                        <div className="business-detail-title">Location</div>
                        <div className="business-detail-info-bottom">{business.address} {business.city} {business.state} {business.zipcode} {business.country}</div>
                        <div className="business-detail-title">About Business</div>
                        <div className="business-detail-info-bottom">{business.description}</div>
                    </div>
                    <div className="business-detail-right-side">
                        <div className="business-detail-title">Contact Business</div>
                        <div className="business-detail-info-bottom">Phone {business.phone}</div>
                        <div className="business-detail-info-bottom">Email {business.email}</div>
                    </div>
                </div>
                <div>
                    <ReviewsForOneBus />
                </div>
            </div>
            <Footer />

        </>
    ) : null
}
