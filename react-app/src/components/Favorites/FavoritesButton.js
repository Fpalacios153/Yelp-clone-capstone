import './FavoritesButton.css'
import { useState } from 'react'
import './FavoritesOnBus.css'
import { useDispatch } from 'react-redux'
import { addOneFavs, removeOneFavs } from '../../store/favorites'

export default function FavoritesButton({ businessId }) {

    // const [heartColor, setHeartColor] = useState('clear')
    const [classChange, setClassChange] = useState(false)
    const dispatch = useDispatch()

    const onFavorite = () => {
        // setHeartColor('red')
        setClassChange(!classChange)
        dispatch(addOneFavs(businessId))

    }
    const onRemove = () => {
        // setHeartColor('red')
        setClassChange(!classChange)
        dispatch(removeOneFavs(businessId))

    }

    return (
        <>
            <button className={classChange ? 'favorite-button-selected' : 'favorite-button'} onClick=
                {() => onRemove()}>
                {classChange ? "Remove from Favorites" : "Add to Favorites"}
                <i className={classChange ? 'fa-solid fa-heart change-heart-red' : 'fa-regular fa-heart change-heart-clear'}>
                </i>
            </button>
        </>
    )
}
