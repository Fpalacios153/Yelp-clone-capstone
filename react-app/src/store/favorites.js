//constants
const GET_ALL_FAVS = 'favorites/GET_ALL_FAVS'
const ADD_FAVS = 'favorites/ADD_FAVS'
const REMOVE_FAVS = 'favorites/REMOVE_FAVS'


const getFavs = (favorites) => ({
    type: GET_ALL_FAVS,
    favorites
})
const addFavs = (favorite) => ({
    type: ADD_FAVS,
    favorite

})
const removeFavs = (data, id) => ({
    type: REMOVE_FAVS,
    data,
    id

})

export const getAllFavs = () => async (dispatch) => {
    const response = await fetch('/api/favorites')
    if (response.ok) {
        const data = await response.json()
        dispatch(getFavs(data))
        return data
    }
    return response
}




export const addOneFavs = (id) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        // body:JSON.stringify()
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(addFavs(data))
        return data
    }
}
export const removeOneFavs = (id) => async (dispatch) => {
    const response = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE',
        headers: { "Content-Type": 'application/json' }
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(removeFavs(data, id))
        return data
    }
}
const initialState = {}
export default function favReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_FAVS:
            let allFavs = {}
            action.favorites.favorites.forEach(fav => {
                allFavs[fav.id] = fav
            })
            return { ...allFavs }
        case ADD_FAVS:
            newState = { ...state }
            newState[action.favorite.id] = action.favorite
        case REMOVE_FAVS:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;

    }
}
