import { NavLink } from "react-router-dom";

function Splashpage() {

    return (
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <div>THIS IS THE SPLASH PAGE</div>
            <div>
                <NavLink to="/login">Log-In</NavLink>
                <NavLink to="/sign-up">Sign up</NavLink>
            </div>
        </div>
    )
}
export default Splashpage
