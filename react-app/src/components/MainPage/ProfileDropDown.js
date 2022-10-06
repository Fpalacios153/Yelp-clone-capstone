
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import LogoutButton from '../auth/LogoutButton';
import './ProfileDrop.css'

export default function ProfileDropDown() {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const history = useHistory()
    const user = useSelector(state => state.session.user)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    };
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false)
        }
        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener("click", closeMenu)
    }, [showMenu])


    return (
        <>
            <div className='profile-pic-container'>
                <img onClick={openMenu}
                    className='profilePic'
                    src={user.profilePic}
                    alt={user.firstName}
                    onError={e => { e.currentTarget.src = '/static/images/icons/defaultProfile.png' }}
                />
            </div>
            {/* <button onClick={openMenu} className="profile-button"> */}

            {/* <i className="fas fa-user-circle" /> {user.firstName[0]} {user.lastName[0]} */}
            {/* </button> */}
            {showMenu && (
                <div className='profile-dropdown-container'>
                    <ul className="profile-dropdown">
                        <li className='li-profile'>{user.firstName} {user.lastName}</li>
                        <li className='li-profile'>{user.email}</li>
                        <li className='profileLi'><LogoutButton /></li>
                    </ul>

                </div>
            )}
        </>
    )
}
