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
    const businessArray = Object.values(allBusinesses)
    const allReviews = useSelector(state => state.reviews)
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
                        <img alt="profile-pic" src={currentUser.profilePic}></img>
                        <div>{currentUser.firstName}'s Profile</div>
                        <div>
                            <ul>
                                <li><NavLink to='/user/businesses'>Businesses</NavLink></li>
                                <li><NavLink to='/user/reviews'>Reviews</NavLink></li>
                                <li><NavLink to='/user/favorites'>Favorites</NavLink></li>
                            </ul>
                        </div>
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
