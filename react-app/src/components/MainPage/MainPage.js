import { Route, Switch, NavLink } from "react-router-dom";
import BusinessDetails from "../Business/BusinessDetails";
import CreateBuisnessModal from '../Business/CreateBuisnessModal'
import Businesses from "../Business/ViewAllBusinesses";
// import NavBar from "../NavBar";
import UsersList from "../UsersList";
import User from "../User";
import ReviewDetails from "../Reviews/ReviewDetails";
import CreateReview from "../Reviews/CreateReviewModal/CreateReview";
import './MainPage.css'
// import LogoutButton from "../auth/LogoutButton";
// import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";
import ProfileView from "../UserProfileP/UserProfilePage";


export default function MainPage() {
    // const currentUser = useSelector(state => state.session.user)

    return (
        <>
            <div>
                <div className="mainpage-navbar">
                    <div className="left-main-nav-container">
                        <div className="main-logo-container">
                            <NavLink className="title-main-page" to='/'>Help!</NavLink>
                            <NavLink to='/'>
                                <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png" alt="burger-logo"></img>
                            </NavLink>
                        </div>
                    </div>
                    <div className="right-main-nav-container">
                        <div>
                            <CreateBuisnessModal homePage={true} />
                        </div>
                        <div>
                            <ProfileDropDown />
                            {/* <LogoutButton /> */}
                            {/* <img className='profilePic' src={currentUser.profilePic}></img> */}
                        </div>
                    </div>
                </div>
                {/* <div>
                    <NavBar />
                    <NavLink to='/businesses'> See all Business</NavLink>
                </div> */}
                <div>
                    <Switch>
                        <Route exact path='/' >
                            <Businesses />
                            {/* <AllReviews /> */}
                        </Route>
                        <Route exact path='/businesses/:businessId' >
                            <BusinessDetails />
                        </Route>
                        <Route path='/users' exact={true} >
                            <UsersList />
                        </Route>
                        <Route path='/users/:userId' exact={true} >
                            <User />
                        </Route>
                        <Route path='/reviews/:reviewId'>
                            <ReviewDetails />
                        </Route>
                        <Route path='/businesses/:businessId/review'>
                            <CreateReview />
                        </Route>
                        <Route path='/profilepage'>
                            <ProfileView />
                        </Route>

                        <Route exact path='/user/businesses'>
                            <ProfileView />
                        </Route>
                        <Route exact path='/user/reviews'>
                            <ProfileView />
                        </Route>
                        <Route exact path='/user/favorites'>
                            <ProfileView />
                        </Route>
                        <Route>
                            <div className="not-found-container">
                                <div className="not-found-redirect">
                                    <div className="not-found-number">404</div>
                                    <h1 className="not-found-word">Page Not Found </h1>
                                    {/* <h2 className="not-found-word">Redirecting...</h2> */}
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}
