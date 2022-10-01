import { Route, Switch } from "react-router-dom";
import BusinessDetails from "../Business/BusinessDetails";
import CreateBuisnessModal from '../Business/CreateBuisnessModal'
import Businesses from "../Business/ViewAllBusinesses";
import NavBar from "../NavBar";
import UsersList from "../UsersList";
import User from "../User";
import AllReviews from "../Reviews/AllReviews";
import ReviewDetails from "../Reviews/ReviewDetails";
import CreateReview from "../Reviews/CreateReviewModal/CreateReview";

export default function MainPage() {

    return (
        <>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", height: "5em" }}>
                    <div> future NavBar</div>
                    <div>THIS IS THE LANDING PAGE</div>
                    <div>
                        <NavBar />
                        {/* <LogoutButton /> */}
                        <CreateBuisnessModal />
                    </div>
                </div>
                <div>
                    {/* <NavLink to='/businesses'> See all Business</NavLink> */}
                </div>
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
