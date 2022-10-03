import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteABusiness, getOneBusiness } from "../../store/business";
import CreateReviewModal from "../Reviews/CreateReviewModal";
// import CreateReview from "../Reviews/CreateReview";
import ReviewsForOneBus from "../Reviews/ReviewsForBus";
import UpdateBusinessModal from "./EditBusinessModal";
import './BusinessDetails.css'

export default function BusinessDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const { businessId } = useParams()


    const businesses = useSelector(state => state.businesses)
    const business = businesses[businessId]
    // console.log(business)

    useEffect(() => {
        dispatch(getOneBusiness(businessId)).then(() => setIsLoaded(true))
    }, [dispatch, businessId])


    const toDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteABusiness(businessId))
        history.push('/businesses')
    }
    return isLoaded ? (
        <>
            <div>
                Business details:
                <img className='business-detail-image' src={business.image}></img>
                <div>{business.name}</div>
                <div>{business.address} {business.city} {business.state} {business.zipcode}</div>
                <div>Phone: {business.phone}</div>
                <div>Email: {business.email}</div>
                <div>About Business: {business.description}</div>
                <CreateReviewModal />
                <UpdateBusinessModal />
                <button onClick={toDelete}>Delete Business</button>
            </div>
            <div>
                <ReviewsForOneBus />
            </div>
        </>
    ) : null
}
