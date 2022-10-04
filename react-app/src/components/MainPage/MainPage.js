import { Route, Switch, NavLink } from "react-router-dom";
import BusinessDetails from "../Business/BusinessDetails";
import CreateBuisnessModal from '../Business/CreateBuisnessModal'
import Businesses from "../Business/ViewAllBusinesses";
import NavBar from "../NavBar";
import UsersList from "../UsersList";
import User from "../User";
import ReviewDetails from "../Reviews/ReviewDetails";
import CreateReview from "../Reviews/CreateReviewModal/CreateReview";
import './MainPage.css'
import LogoutButton from "../auth/LogoutButton";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";

export default function MainPage() {
    const currentUser = useSelector(state => state.session.user)

    return (
        <>
            <div>
                <div className="mainpage-navbar">
                    <div className="left-main-nav-container">
                        <div className="main-logo-container">
                            <NavLink className="title-main-page" to='/businesses'>Help!</NavLink>
                            <NavLink to='/businesses'>
                                <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png"></img>
                            </NavLink>
                        </div>
                    </div>
                    <div className="right-main-nav-container">
                        <div>
                            <CreateBuisnessModal />
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
                        <Route exact path='/businesses' >
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
                    </Switch>
                </div>
            </div>
        </>
    )
}
