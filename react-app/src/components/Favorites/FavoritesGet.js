import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import FavoritesButton from "./FavoritesButton"
import './FavoritesGet.css'



export default function FavoritesGet() {

    const usersFavs = useSelector(state => state.favorites)
    const usersFavsArr = Object.values(usersFavs)
    usersFavsArr.pop()
    return (
        <>
            <div className="favorites-container">
                {usersFavsArr.map(favs => (
                    <div key={favs.id}>
                        <div className="favorites-container-item">

                            <FavoritesButton businessDetails={false} businessId={favs.id} />
                            <NavLink className='favorites-navlink' to={`/businesses/${favs.id}`}>
                                {/* <span style={{ paddingLeft: '10px' }}> */}
                                {favs.name}
                                {/* </span> */}
                            </NavLink>
                        </div>
                        {/* <span>
                            {favs.phone}
                        </span> */}
                    </div>
                ))
                }
            </div >
        </>
    )
}
