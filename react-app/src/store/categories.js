//constants
const GET_CATEGORIES = 'category/GET_CATEGORIES'
const GET_ONE_BUSI_CATEGORIES = 'category/GET_ONE_BUSI_CATEGORIES'
const ADD_CATEGORIES = 'category/ADD_CATEGORIES'
const REMOVE_CATEGORIES = 'category/REMOVE_CATEGORIES'


const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
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
        default:
            return state
    }
}
