import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Route, Switch } from 'react-router-dom';
import { getAllBusinesses } from "../../store/business";
import { getAllReviews } from "../../store/review";
import Footer from "../Footer"
import UsersBusinesses from "./UserBusinesses";
import './UserProfilepage.css'
import UsersReview from "./UsersReview";

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
        dispatch(getAllBusinesses()).then(() => dispatch(getAllReviews()))
    }, [dispatch])


    let businesses = usersBusinesses.length > 0 ? (
        <>
            <UsersBusinesses usersBusinesses={usersBusinesses} usersName={currentUser.firstName} />
        </>
    ) : (<div>Loading...</div>)


    let reviews = usersReview.length > 0 ? (
        <>
            <UsersReview usersReview={usersReview} usersName={currentUser.firstName} business={businessArray} />
        </>
    ) : (<div>Loading...</div>)

    return (
        <>
            <div>
                <div className="profile-pic-top-container">
                    <div className="user-profile-info">
                        <h1 style={{ margin: '0' }}>{`${currentUser.firstName} ${currentUser.lastName[0]}.`}</h1>
                        <span>
                            <div>
                                <i className="fa-regular fa-star" style={{ color: 'red' }}></i>

                                {' ' + usersReview.length + ' '}Reviews
                            </div>
                        </span>
                    </div>
                    <div>Edit</div>

                </div>
                <div className="profile-middle-container">
                    <div className="side-nav-bar-container">
                        <img className="image-profile-pic" alt="profile-pic" src={currentUser.profilePic}></img>
                        <div className="side-bar-word-container">
                            <h3 className="profile-page-name">{currentUser.firstName}'s Profile</h3>
                            <ul className="profile-page-list">
                                <li className="profile-page-list-item">
                                    <NavLink className='profile-navlink' to='/profilepage'>
                                        <div className="profile-li-text-container">
                                            <div className="icon-container" >
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <span>
                                                Overview
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="profile-page-list-item">
                                    <NavLink className='profile-navlink' to='/user/businesses'>
                                        <div className="profile-li-text-container">
                                            <div className=" icon-container">
                                                <i className=" fa-solid fa-shop"></i>
                                            </div>
                                            <span>
                                                Businesses
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="profile-page-list-item">
                                    <NavLink className='profile-navlink' to='/user/reviews'>
                                        <div className="profile-li-text-container">
                                            <div className=" icon-container">
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <span>
                                                Reviews
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="profile-page-list-item">
                                    <NavLink className='profile-navlink' to='/user/favorites'>
                                        <div className="profile-li-text-container">
                                            <div className=" icon-container">
                                                <i className="fa-regular fa-heart"></i>
                                            </div>
                                            <span>
                                                Favorites
                                            </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="profile-page-list-item"></li>
                            </ul>
                        </div>
                        {/* <i class="fa fa-user-circle-o"></i> */}

                    </div>
                    <div className="center-profile-container">
                        {/* <h1>Hello</h1> */}
                        <div className="user-route-container">
                            <Switch>
                                <Route exact path='/profilepage'>
                                    <h1>Overview</h1>
                                </Route>
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
