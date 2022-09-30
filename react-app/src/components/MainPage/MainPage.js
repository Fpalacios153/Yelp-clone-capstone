import { Route, Switch } from "react-router-dom";
// import LogoutButton from "../auth/LogoutButton";
import BusinessDetails from "../Business/BusinessDetails";
import CreateNewBusiness from "../Business/CreateBusiness";
import Businesses from "../Business/ViewAllBusinesses";
import NavBar from "../NavBar";
import UsersList from "../UsersList";
import User from "../User";

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
                    </div>
                </div>
                <div>
                    {/* <NavLink to='/businesses'> See all Business</NavLink> */}
                </div>
                <div>
                    <Switch>
                        <Route exact path='/businesses/:businessId' >
                            <BusinessDetails />
                        </Route>
                        <Route exact path='/businesses' >
                            <Businesses />
                            <CreateNewBusiness />
                        </Route>
                        <Route path='/users' exact={true} >
                            <UsersList />
                        </Route>
                        <Route path='/users/:userId' exact={true} >
                            <User />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}
