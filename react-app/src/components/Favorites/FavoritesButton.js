import './FavoritesButton.css'
import { useState } from 'react'

export default function FavoritesButton() {

    // const [heartColor, setHeartColor] = useState('clear')
    const [classChange, setClassChange] = useState(false)

    const onFavorite = () => {
        // setHeartColor('red')
        setClassChange(!classChange)

    }

    return (
        <>
            <button className={classChange ? 'favorite-button-selected' : 'favorite-button'} onClick={() => onFavorite()}> {classChange ? "Remove from Favorites" : "Add to Favorites"}
                <i className={classChange ? 'fa-solid fa-heart change-heart-red' : 'fa-regular fa-heart change-heart-clear'}>
                </i>
            </button>
        </>
    )
}
