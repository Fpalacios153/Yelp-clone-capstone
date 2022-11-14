import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteABusiness, getAllBusinesses } from "../../store/business";
import CreateReviewModal from "../Reviews/CreateReviewModal";
import ReviewsForOneBus from "../Reviews/ReviewsForBus";
import UpdateBusinessModal from "./EditBusinessModal";
import './BusinessDetails.css'
import Footer from "../Footer";
import AverageStarRating from "../AverageStarRating";
import FavoritesButton from "../Favorites/FavoritesButton";
import { getAllFavs } from "../../store/favorites";
import BusinessesCategories from './BusinessesCategories'
import AddCategoriesModal from "../Categories/AddCategoriesModal";
export default function BusinessDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)

    const { businessId } = useParams()

    const businesses = useSelector(state => state.businesses)
    const busArray = Object.values(businesses)
    const business = businesses[businessId]

    const currentUser = useSelector(state => state.session.user)

    //fix this!!!!!!!å
    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => dispatch(getAllFavs())).then(() => setIsLoaded(true))


    }, [dispatch, businessId])

    // console.log(business.categories)
    function redirect() {
        setTimeout(() => { history.push(`/`) }, 1000)
    }

    let exist = false
    if (isLoaded && !business) {

        busArray.forEach(buz => {
            if (Number(buz.id) === +businessId) {
                exist = true
            }
        })
        if (!exist) {
            return (
                <>
                    <div className="not-found-container">
                        <div className="not-found-redirect">
                            <div className="not-found-number">404</div>
                            <h1 className="not-found-word">Business Not Found </h1>
                            <h2 className="not-found-word">Redirecting...</h2>
                            {redirect()}
                        </div>
                    </div>
                </>
            )
        }
    }
    const toDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteABusiness(businessId))
        history.push('/')
    }
    return isLoaded && business ? (
        <>
            <div className="cover-whole-webpage-details">

                <div className="business-detail-container">
                    <img className='business-detail-image' src={business.image} alt={business.name}
                        onError={e => { e.currentTarget.src = '/static/images/restpic/pexels-aleksandar-pasaric-3342739.jpg' }}
                    />
                    <div className="business-detail-words-in-image">
                        <div>{business.name}</div>
                        <div className="business-detail-review">
                            {/* Average Rating: {reviewAverage} {numReview} reviews */}
                            <div style={{ color: 'gold' }}>
                                <AverageStarRating reviewAverage={business.reviewAverage} />

                            </div>
                            <div style={{ paddingLeft: '10px' }}>
                                {business.reviewAverage > 0 ? business.reviewAverage.toFixed(1) : 0} - {business.reviewCount > 0 ? business.reviewCount : 0} reviews
                            </div>
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
                            <span style={{ paddingLeft: '10px' }}>
                                <AddCategoriesModal />
                            </span>
                        </div>
                    ) :
                        <div className="business-review-favorites-container">
                            <CreateReviewModal />
                            <FavoritesButton businessId={businessId} businessDetails={true} />
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
                    <BusinessesCategories business={business} currentUser={currentUser} />
                    <div>
                        <ReviewsForOneBus />
                    </div>
                </div>
                <div className="footer-test">
                    <Footer />
                </div>
            </div>
        </>
    ) : null
}
