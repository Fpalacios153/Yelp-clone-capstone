import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteABusiness, getOneBusiness } from "../../store/business";
import UpdateBusiness from "./EditBusiness";

export default function BusinessDetails() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const { businessId } = useParams()


    const business = useSelector(state => state.businesses)
    // console.log(business)

    useEffect(() => {
        dispatch(getOneBusiness(businessId)).then(() => setIsLoaded(true))
    }, [dispatch, businessId])
    const toDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteABusiness(businessId))
        await history.push('/')
    }
    return isLoaded ? (
        <>
            <div>
                Business details:
                <div>{business.name}</div>
                <div>{business.address} {business.city} {business.state} {business.zipcode}</div>
                <div>Phone: {business.phone}</div>
                <div>Email: {business.email}</div>
                <div>About Business: {business.description}</div>
                <button onClick={toDelete}>Delete Business</button>
            </div>
            <UpdateBusiness />
        </>
    ) : null
}
