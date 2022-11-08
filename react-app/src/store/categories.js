//constants
const GET_CATEGORIES = 'category/GET_CATEGORIES'
const GET_ONE_BUSI_CATEGORIES = 'category/GET_ONE_BUSI_CATEGORIES'
const ADD_CATEGORIES = 'category/ADD_CATEGORIES'
const REMOVE_CATEGORIES = 'category/REMOVE_CATEGORIES'


const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})
const getOneBusiCategories = (categories) => ({
    type: GET_ONE_BUSI_CATEGORIES,
    categories
})
const addCategories = (categories) => ({
    type: ADD_CATEGORIES,
    categories
})
const removeCategories = (id) => ({
    type: REMOVE_CATEGORIES,
    id
})
export const getAllCategories = () => async (dispatch) => {
    const response = await fetch('/api/categories')

    if (response.ok) {
        const data = await response.json()
        dispatch(getCategories(data))
        return data
    }
    return response
}
export const getOneCategories = (id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}/categories`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getOneBusiCategories(data))
        return data
    }
    return response
}
export const toAddCategories = (id, categoriesToAdd) => async (dispatch) => {
    const response = await fetch(`/api/categories/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoriesToAdd)
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(addCategories(data))
        return data
    }
}
export const toRemoveCategories = (id, cateId) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}/categories/${cateId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        dispatch(removeCategories(cateId))
    }
    return response

}

const initialState = {}

export default function categoryReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_CATEGORIES:
            const allCate = {}
            action.categories.categories.forEach(category => {
                allCate[category.id] = category
            })
            return { ...allCate }
        case GET_ONE_BUSI_CATEGORIES:
            const OneCate = {}
            action.categories.categories.forEach(category => {
                OneCate[category.id] = category
            })
            return { ...OneCate }
        case ADD_CATEGORIES:
            newState = { ...state }
            // newState[action.categories.id] = action.categories
            return newState
        case REMOVE_CATEGORIES:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state
    }
}
