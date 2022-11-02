import { useSelector } from "react-redux"
import FavoritesButton from "./FavoritesButton"
import './FavoritesGet.css'



export default function FavoritesGet() {

    const usersFavs = useSelector(state => state.favorites)
    const usersFavsArr = Object.values(usersFavs)
    return (
        <>
            <div className="favorites-container">
                {usersFavsArr.map(favs => (
                    <div key={favs.id}>
                        <div className="favorites-container-item">
                            <FavoritesButton businessDetails={false} businessId={favs.id} />
                            <span style={{ paddingLeft: '10px' }}>

                                {favs.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
