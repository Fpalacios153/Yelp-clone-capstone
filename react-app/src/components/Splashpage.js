import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import './Splashpage.css'
function Splashpage() {

    return (
        <div className="splash-container">
            <div className="navbar-container">
                {/* <img className='splash-image' src="/static/images/restpic/pexels-lisa-fotios-1126728.jpg"></img> */}
                <div className="right-nav-container">
                    <div className="logo-container">
                        <NavLink className="title-splash" to='/'>Help!</NavLink>
                        <NavLink to='/'>
                            <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png"></img>
                        </NavLink>
                    </div>
                </div>
                <div className="left-nav-container">
                    <div className="button-container">
                        <div className="ls-button-style" >
                            <NavLink className='login-button' to="/login">Log In</NavLink>
                        </div>
                        <div className="ls-button-style">
                            <NavLink className='sign-up-button' to="/sign-up">Sign up</NavLink>
                        </div>
                    </div>
                </div>
            </div >
            <div className="middle-container">Middle Part</div>
            <Footer />
        </div >
    )
}
export default Splashpage
