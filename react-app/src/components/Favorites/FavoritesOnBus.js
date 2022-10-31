import './FavoritesButton.css'
import { useState } from 'react'

export default function FavoritesOnBus() {

    const [classChange, setClassChange] = useState(false)

    const onFavorite = () => {
        setClassChange(!classChange)

    }

    return (
        <>
            <button className={classChange ? 'favorite-button-selected' : 'favorite-button'} onClick={() => onFavorite()}>
                <i className={classChange ? 'fa-solid fa-heart change-heart-red' : 'fa-regular fa-heart change-heart-clear'}>
                </i>
            </button>
        </>
    )
}
