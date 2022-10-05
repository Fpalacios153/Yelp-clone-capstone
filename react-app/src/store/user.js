//constants
const GET_ALL_USER = 'user/GET_ALL_USER'


const getUsers = (user) => ({
    type: GET_ALL_USER,
    user
})


export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users')
    if (response.ok) {
        const data = await response.json()
        dispatch(getUsers(data))
        return data
    }
    return response
}
const initialState = {}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USER:
            let allUsers = {}
            action.user.users.forEach(use => {
                allUsers[use.id] = use
            })
            return { ...allUsers }
        default:
            return state;

    }
}
