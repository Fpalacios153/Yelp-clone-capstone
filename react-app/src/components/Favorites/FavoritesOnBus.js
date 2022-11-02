// import './FavoritesButton.css'
// import { useEffect, useState } from 'react'
// import { addOneFavs, getAllFavs, removeOneFavs } from '../../store/favorites'
// import { useDispatch, useSelector } from 'react-redux'

// export default function FavoritesOnBus({ businessId }) {
//     const dispatch = useDispatch()
//     const [classChange, setClassChange] = useState(false)

//     const favs = useSelector(state => state.favorites)
//     const favsArray = Object.values(favs)
//     const found = favsArray.find(fav => fav.id === +businessId)

//     useEffect(() => {
//         if (found) {
//             setClassChange(true)
//         }
//     })


//     const onFavorite = async () => {
//         if (!classChange) {
//             await setClassChange(!classChange)
//             await dispatch(addOneFavs(businessId))
//             // await dispatch(getAllFavs())

//         } else {
//             await setClassChange(!classChange)
//             await dispatch(removeOneFavs(businessId))
//             // await dispatch(getAllFavs())

//         }
//     }
//     return (
//         <>
//             <button className={classChange ? 'favorite-button-heart-selected' : 'favorite-button-heart'} onClick={() => onFavorite()}>
//                 <i className={classChange ? 'fa-solid fa-heart change-heart-red-fav' : 'fa-solid fa-heart change-heart-clear-fav'}>
//                 </i>
//             </button>
//         </>
//     )
// }
