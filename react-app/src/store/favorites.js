//constants
const GET_ALL_FAVS = 'user/GET_ALL_FAVS'


const getFavs = (favs) => ({
    type: GET_ALL_FAVS,
    user
})


export const getAllFavs = () => async (dispatch) => {
    const response = await fetch('/api/users/favorites')
    if (response.ok) {
        const data = await response.json()
        dispatch(getFavs(data))
        return data
    }
    return response
}
const initialState = {}
export default function favReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_FAVS:
            let allFavs = {}
        // action.user.users.forEach(use => {
        //     allUsers[use.id] = use
        // })
        // return { ...allUsers }
        default:
            return state;

    }
}
