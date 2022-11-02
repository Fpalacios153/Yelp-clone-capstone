import './FavoritesButton.css'
import { useEffect, useState } from 'react'
import './FavoritesOnBus.css'
import { useDispatch, useSelector } from 'react-redux'
import { addOneFavs, getAllFavs, removeOneFavs } from '../../store/favorites'
import { useFavoriteContext } from '../../context/SetFavoritesContext'

export default function FavoritesButton({ businessId }) {

    // const { classChange, setClassChange } = useFavoriteContext()

    const [classChange, setClassChange] = useState(false)
    const dispatch = useDispatch()

    const favs = useSelector(state => state.favorites)
    const favsArray = Object.values(favs)
    const found = favsArray.find(fav => fav.id === +businessId)

    useEffect(() => {
        if (found) {
            setClassChange(true)
        }
    }, [])


    const onFavorite = async () => {
        if (!classChange) {
            await setClassChange(!classChange)
            await dispatch(addOneFavs(businessId))
        } else {
            await setClassChange(!classChange)
            await dispatch(removeOneFavs(businessId))
        }
    }

    return (
        <>
            <button className={classChange ? 'favorite-button-selected' : 'favorite-button'} onClick={() => onFavorite()}>
                {classChange ? "Remove from Favorites" : "Add to Favorites"}
                <i className={classChange ? 'fa-solid fa-heart change-heart-red' : 'fa-regular fa-heart change-heart-clear'}>
                </i>
            </button>
        </>
    )
}
