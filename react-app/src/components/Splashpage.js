import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import './Splashpage.css'
function Splashpage() {
    const [image, setImage] = useState(0)
    const external1 = 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const external2 = 'https://images.pexels.com/photos/213939/pexels-photo-213939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const external3 = 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const external4 = 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const imageArray = [external1, external2, external3, external4]
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImage(prevNum => ++prevNum % imageArray.length);
        }, 5000);

        return () => clearInterval(imageInterval);
    }, []);

    return (
        <div className="splash-container">
            <div className="navbar-container"
                style={{
                    backgroundImage: `url(${imageArray[image]})`,
                    transition: "background-image 4s"
                }}>
                {/* <img className='splash-image' src="/static/images/restpic/pexels-lisa-fotios-1126728.jpg"></img> */}
                <div className="right-nav-container">
                    <div className="logo-container">
                        <NavLink className="title-splash" to='/'>Help<span style={{ color: 'red' }}>!</span></NavLink>
                        <NavLink to='/'>
                            <img className="burger-splash" src="/static/images/logos/icons8-hamburger-48.png"></img>
                        </NavLink>
                    </div>
                </div>
                <div className="center-nav-container">
                    <div className="center-background">
                        <div className="center-nav-text">Welcome to Help<span style={{ color: 'red' }}>!</span></div>
                        <p className="center-nav-long-text">Where finding your new favorite resturant is as easy as clicking a button</p>
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
            < Footer />
        </div >
    )
}
export default Splashpage
