import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"
// import { deleteABusiness } from "../../store/business"
// import { getAllReviews } from "../../store/review"
import AverageStarRating from "../AverageStarRating"
import Footer from "../Footer"
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
    // const toDelete = async (id) => {
    //     // e.preventDefault()
    //     await dispatch(deleteABusiness(id))
    //     // await history.push('/')
    // }
    return isLoaded ? (
        <>
            <div className="entire-business-container">
                <div className="business-title">
                    Businesses
                </div>
                {businesses.map((bus, idx) => (
                    <div key={bus.id} className='business-container'>
                        <NavLink className='navlink-business-list' to={`/businesses/${bus.id}`}>
                            <div className="business-list">
                                <img
                                    className="business-image"
                                    src={bus.image}
                                    alt={bus.name}
                                    onError={e => { e.currentTarget.src = '/static/images/restpic/pexels-aleksandar-pasaric-3342739.jpg' }}

                                />
                                <div className="business-text-container">
                                    <div className="business-name">
                                        {idx + 1}.
                                        <div style={{ paddingLeft: '5px' }}>
                                            {bus.name}
                                        </div>
                                    </div>
                                    {/* <FavoritesOnBus /> */}

                                    <div className="business-average">
                                        <AverageStarRating reviewAverage={bus.reviewAverage} />
                                        <span style={{ fontWeight: '500', paddingLeft: '10px', paddingRight: '5px' }}>{bus.reviewAverage > 0 ? bus.reviewAverage.toFixed(1) : 0}</span>
                                        {' '}({bus.reviewCount > 0 ? bus.reviewCount : 0} reviews)
                                    </div>
                                    <div className="business-review-container">
                                        <i className="fa-regular fa-comment"></i>
                                        {bus.reviews ? (
                                            <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"{bus.reviews[0].review.length < 150 ? bus.reviews[0].review :
                                                `${bus.reviews[0].review.slice(0, 150)}...see more`}</span>

                                        ) :
                                            <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"No Reviews yet"</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                ))
                }
            </div >
            <Footer />
        </>
    ) : null
}
