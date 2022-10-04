import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"
import { deleteABusiness } from "../../store/business"
import { getAllReviews } from "../../store/review"
import './ViewAll.css'
// import { useHistory } from "react-router-dom"

export default function Businesses() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()

    const businessesList = useSelector(state => state.businesses)
    const businesses = Object.values(businessesList)


    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => setIsLoaded(true))
    }, [dispatch])
    const toDelete = async (id) => {
        // e.preventDefault()
        await dispatch(deleteABusiness(id))
        // await history.push('/')
    }
    return isLoaded ? (
        <>
            <div className="entire-business-container">
                <div className="business-title">
                    All Businesses:
                </div>
                {businesses.map((bus, idx) => (
                    <div key={bus.id} className='business-container'>
                        <NavLink className='navlink-business-list' to={`/businesses/${bus.id}`}>
                            <div className="business-list">
                                <img className="business-image" src={bus.image}></img>
                                <div className="business-text-container">
                                    <div className="business-name">
                                        {idx + 1}.
                                        <div style={{ paddingLeft: '5px' }}>
                                            {bus.name}
                                        </div>
                                    </div>
                                    <div className="business-average">
                                        Average Rating:{' '}
                                        <span style={{ fontWeight: '500' }}>{bus.reviewAverage}</span>
                                        {' '}({bus.reviewCount} reviews)
                                    </div>
                                    <div className="business-review-container">
                                        <i className="fa-regular fa-comment"></i>
                                        <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"{bus.reviews[0].review}"</span>
                                    </div>
                                </div>

                                {/* <div>
                                <button onClick={() => toDelete(bus.id)}>DELETE</button>
                            </div> */}
                            </div>
                        </NavLink>
                    </div>
                ))
                }
            </div >
        </>
    ) : null
}
