import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllFavs } from "../../store/favorites"
import './FavoritesGet.css'
import FavoritesOnBus from "./FavoritesOnBus"



export default function FavoritesGet() {
    const dispatch = useDispatch()

    const usersFavs = useSelector(state => state.favorites)
    const usersFavsArr = Object.values(usersFavs)
    console.log(usersFavsArr)

    useEffect(() => {
        dispatch(getAllFavs())
    }, [])
    return (
        <>
            <div className="favorites-container">
                {usersFavsArr.map(favs => (
                    <div>
                        <div className="favorites-container-item">
                            <FavoritesOnBus />
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
