import './FavoritesButton.css'
import { useEffect, useState } from 'react'
import './FavoritesOnBus.css'
import { useDispatch, useSelector } from 'react-redux'
import { addOneFavs, removeOneFavs } from '../../store/favorites'

export default function FavoritesButton({ businessId, businessDetails }) {


    const [classChange, setClassChange] = useState(false)

    const dispatch = useDispatch()

    const favs = useSelector(state => state.favorites)
    const favsArray = Object.values(favs)
    const found = favsArray.find(fav => fav.id === +businessId)

    useEffect(() => {
        if (found) {
            setClassChange(true)
        } else {
            setClassChange(false)
        }
    }, [found])


    const onFavorite = async () => {
        if (!classChange) {
            await setClassChange(!classChange)
            await dispatch(addOneFavs(businessId))
        } else {
            await setClassChange(!classChange)
            await dispatch(removeOneFavs(businessId))
        }
    }
    //returns the add to favorites button on the details page
    return businessDetails ? (
        <>
            <button className={classChange ? 'favorite-button-selected' : 'favorite-button'} onClick={() => onFavorite()}>
                {classChange ? "Remove from Favorites" : "Add to Favorites"}
                <i className={classChange ? 'fa-solid fa-heart change-heart-red' : 'fa-regular fa-heart change-heart-clear'}>
                </i>
            </button>
        </>
    ) : (
        //Returns just the Heart as a button on the favorites page on the userProfile
        <>
            <button className={classChange ? 'favorite-button-heart-selected' : 'favorite-button-heart'} onClick={() => onFavorite()}>
                <i className={classChange ? 'fa-solid fa-heart change-heart-red-fav' : 'fa-solid fa-heart change-heart-clear-fav'}>
                </i>
            </button>
        </>

    )
}
