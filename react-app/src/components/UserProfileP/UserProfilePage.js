import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Route, Switch } from 'react-router-dom';
import { getAllBusinesses } from "../../store/business";
import { getAllReviews } from "../../store/review";
import Footer from "../Footer"
import './UserProfilepage.css'

export default function ProfileView() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const allBusinesses = useSelector(state => state.businesses)
    const allReviews = useSelector(state => state.reviews)

    const businessArray = Object.values(allBusinesses)
    const reviewArr = Object.values(allReviews)

    let usersBusinesses = businessArray.filter(bus =>
        bus.ownerId === currentUser.id
    )
    let usersReview = reviewArr.filter(review =>
        review.userId === currentUser.id
    )

    useEffect(() => {
        dispatch(getAllBusinesses())
        dispatch(getAllReviews())
    }, [dispatch])


    let businesses = usersBusinesses ? (
        <>

            <div>Users Businesses go hereß</div>
            {usersBusinesses.map(bus => (
                <div key={bus.id}>
                    <NavLink to={`/businesses/${bus.id}`}>

                        <div>{bus.name}</div>
                        <img style={{ width: '100px', height: '100px' }} src={bus.image}></img>
                        {/* <div>{bus.image}</div> */}
                    </NavLink>
                </div>
            ))}
        </>
    ) : (<div>Loading...</div>)


    let reviews = usersReview ? (
        <>
            <div>Users Reviewsß go hereß</div>
            {usersReview.map(review => (
                <div key={review.id}>
                    <NavLink to={`/businesses/${review.businessId}`}>
                        <div>{review.businessId}</div>
                        <div>{review.review}</div>
                        <div>{review.rating}</div>
                    </NavLink>
                </div>
            ))}
        </>
    ) : (<div>Loading...</div>)

    return (
        <>
            <div>
                <div className="profile-pic-top-container">

                </div>
                <div className="profile-middle-container">
                    <div className="side-nav-bar-container">
                        <img className="image-profile-pic" alt="profile-pic" src={currentUser.profilePic}></img>
                        <div className="side-bar-word-container">
                            <h3 className="profile-page-name">{currentUser.firstName}'s Profile</h3>
                            <ul className="profile-page-list">
                                <li className="profile-page-list-item"><NavLink className="profile-page-list-item" to='/user/businesses'><i className="fa-solid fa-shop"></i>Businesses</NavLink></li>
                                <li className="profile-page-list-item"><NavLink className="profile-page-list-item" to='/user/reviews'> <i class="fa-regular fa-star"></i>Reviews</NavLink></li>
                                <li className="profile-page-list-item"><NavLink className="profile-page-list-item" to='/user/favorites'><i class="fa-regular fa-heart"></i>Favorites</NavLink></li>
                            </ul>
                        </div>
                        {/* <i class="fa fa-user-circle-o"></i> */}

                    </div>
                    <div className="center-profile-container">
                        <h1>Hello</h1>
                        <div className="user-route-container">
                            <Switch>
                                <Route exact path='/user/businesses'>
                                    <h1>{businesses}</h1>
                                </Route>
                                <Route exact path='/user/reviews'>
                                    <h1>{reviews}</h1>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}
