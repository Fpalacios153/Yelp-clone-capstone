import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Route, Switch } from 'react-router-dom';
import { getAllBusinesses } from "../../store/business";
import { getAllFavs } from "../../store/favorites";
import { getAllReviews } from "../../store/review";
import CreateBusinessModal from "../Business/CreateBuisnessModal";
import FavoritesGet from "../Favorites/FavoritesGet";
import Footer from "../Footer"
import UsersBusinesses from "./UserBusinesses";
import './UserProfilepage.css'
import UsersReview from "./UsersReview";

export default function ProfileView() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    const allBusinesses = useSelector(state => state.businesses)
    const allReviews = useSelector(state => state.reviews)
    const getFavs = useSelector(state => state.favorites)

    const businessArray = Object.values(allBusinesses)
    const reviewArr = Object.values(allReviews)
    const favortiesArr = Object.values(getFavs)



    let numberOfFavorites = favortiesArr.length - 1

    let usersBusinesses = businessArray.filter(bus =>
        bus.ownerId === currentUser.id
    )
    let usersReview = reviewArr.filter(review =>
        review.userId === currentUser.id
    )
    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => dispatch(getAllReviews())).then(() => dispatch(getAllFavs()))
    }, [dispatch])

    let overview = (
        <div>
            <h4 className='user-review-top-title' style={{ paddingLeft: '15px' }}>
                Overview
            </h4>
        </div>
    )
    let businesses = (
        <div className='entire-user-review-container'>
            <h4 className='user-review-top-title'>
                {currentUser.firstName}'s Businesses
            </h4>
            {usersBusinesses.length > 0 ? (

                <UsersBusinesses usersBusinesses={usersBusinesses} usersName={currentUser.firstName} />

            ) : (
                <div className="no-result-entire-container">
                    <div className="title-container-BRF">
                        <div className="no-BRF-title">No Businesses Yet</div>
                        <div className="no-BRF-title" >
                            <h4>
                                Create your first business here!

                            </h4>
                        </div>
                        <CreateBusinessModal homePage={false} />
                    </div>
                </div>
            )}
        </div>
    )


    let reviews = (
        <div className='entire-user-review-container'>
            <h4 className='user-review-top-title'>
                {currentUser.firstName}'s Reviews
            </h4>
            {usersReview.length > 0 ? (
                <UsersReview usersReview={usersReview} usersName={currentUser.firstName} business={businessArray} />

            ) : (
                <div className="no-result-entire-container">
                    <div className="title-container-BRF">
                        <div className="no-BRF-title">No Reviews Yet</div>
                        <div className="no-BRF-title" >Visit A <NavLink className='user-review-return-to-bus' to='/'>
                            Business's Page
                        </NavLink>
                            {' '}to add a Review</div>
                    </div>
                </div>
            )}
        </div>

    )

    let favorites =

        (
            <div>
                <h4 className='user-review-top-title' style={{ paddingLeft: '15px' }}>
                    {currentUser.firstName}'s Favorites
                </h4>
                {numberOfFavorites > 0 ? (
                    <FavoritesGet />
                ) : (
                    <div className="no-result-entire-container">
                        <div className="title-container-BRF">
                            <div className="no-BRF-title">No Favorites Yet</div>
                            <div className="no-BRF-title" >Visit A <NavLink className='user-review-return-to-bus' to='/'>
                                Business's Page
                            </NavLink>
                                {' '}to add to Favorites</div>
                        </div>
                    </div>
                )}

            </div>
        )


    return reviewArr.length > 0 && numberOfFavorites >= 0 && (
        <>
            <div>
                <div className="profile-pic-top-container">
                    <div className="user-profile-info">
                        <h1 style={{ margin: '0' }}>{`${currentUser.firstName} ${currentUser.lastName[0]}.`}</h1>
                        <div className="profile-count-container">
                            <div style={{ paddingRight: '10px' }}>
                                <i className="fa-regular fa-star" style={{ color: 'red' }}></i>

                                {' ' + usersReview.length + ' '}Reviews
                            </div>
                            <div>
                                <i className="fa-regular fa-heart" style={{ color: 'red' }}></i>

                                {' ' + numberOfFavorites + ' '}Favorites
                            </div>
                        </div>
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
                                    <h1>{overview}</h1>
                                </Route>
                                <Route exact path='/user/businesses'>
                                    <h2>{businesses}</h2>
                                </Route>
                                <Route exact path='/user/reviews'>
                                    <h2>{reviews}</h2>
                                </Route>
                                <Route exact path='/user/favorites'>
                                    <h2>{favorites}</h2>
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
