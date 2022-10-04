import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
// import NavBar from './components/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
// import Businesses from './components/Business/ViewAllBusinesses';
// import BusinessDetails from './components/Business/BusinessDetails';
// import CreateNewBusiness from './components/Business/CreateBusiness';
import Splashpage from './components/Splashpage';
import MainPage from './components/MainPage/MainPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);


  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  const Home = () => {
    if (currentUser) {
      return (
        <>
          {/* <Redirect to='/businesses' /> */}
          < MainPage />
        </>
      )
    } else {
      return (
        <>
          <Splashpage />
        </>
      )
    }
  }




  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <Route path='/spash' exact={true}>
          <Splashpage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route>
          <Home />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/businesses' exact={true} >
          <Businesses />
          <CreateNewBusiness />
        </ProtectedRoute>
        <ProtectedRoute path='/businesses/:businessId' exact={true} >
          <BusinessDetails />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
