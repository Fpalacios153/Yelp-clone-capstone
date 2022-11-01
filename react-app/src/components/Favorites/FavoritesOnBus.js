import './FavoritesButton.css'
import { useState } from 'react'

export default function FavoritesOnBus() {

    const [classChange, setClassChange] = useState(false)

    const onFavorite = () => {
        setClassChange(!classChange)

    }

    return (
        <>
            <button className={classChange ? 'favorite-button-heart-selected' : 'favorite-button-heart'} onClick={() => onFavorite()}>
                <i className={classChange ? 'fa-solid fa-heart change-heart-red-fav' : 'fa-solid fa-heart change-heart-clear-fav'}>
                </i>
            </button>
        </>
    )
}
