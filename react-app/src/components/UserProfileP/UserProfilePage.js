import { useSelector } from "react-redux"
import './UserProfilepage.css'

export default function ProfileView() {
    const currentUser = useSelector(state => state.session.user)
    console.log(currentUser)
    return (
        <>
            <div>
                <div className="profile-pic-top-container">
                </div>
                <div className="profile-middle-container">
                    <div className="side-nav-bar-container">
                        <img alt="profile-pic" src={currentUser.profilePic}></img>
                        <div>{currentUser.firstName}'s Profile</div>
                    </div>
                    <div className="center-profile-container">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
