//constants
const GET_BUSINESSES = 'business/GET_BUSINESSES'
const ONE_BUSINESS = 'business/ONE_BUSINESS'
const CREATE_BUSINESS = 'buisness/CREATE'
const UPDATE_BUSINESS = 'buisness/UPDATE'
const DELETE_BUSINESS = 'buisness/DELETE'

const getBusinesses = (businesses) => ({
    type: GET_BUSINESSES,
    businesses
});
const oneBusiness = (business) => ({
    type: ONE_BUSINESS,
    business
})
const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business
})
const updateBuiness = (business) => ({
    type: UPDATE_BUSINESS,
    business
})
const deleteBusiness = (id) => ({
    type: DELETE_BUSINESS,
    id
})
export const getAllBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses')

    if (response.ok) {
        const data = await response.json()
        dispatch(getBusinesses(data))
        return data
    }
    return response
}

export const getOneBusiness = (id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(oneBusiness(data))
        return data
    }
    return response
}
export const createABusiness = (business) => async (dispatch) => {
    const response = await fetch('/api/businesses', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(business)
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(createBusiness(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}
export const updateABusiness = (business, id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(business)
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(updateBuiness(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteABusiness = (id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        dispatch(deleteBusiness(id))
    }
    return response
}
const initialState = {}

export default function businessReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_BUSINESSES:
            const allBusinesses = {}
            action.businesses.business.forEach(business => {
                allBusinesses[business.id] = business
            })
            return { ...allBusinesses }
        case ONE_BUSINESS:
            // newState = { ...state }
            // newState[action.business.id] = action.business
            // return newState
            newState = { ...state }
            newState = { ...action.business }
            return newState
        case CREATE_BUSINESS:
            newState = { ...state }
            newState[action.business.id] = action.business
            return newState
        case UPDATE_BUSINESS:
            newState = { ...state }
            newState = { ...action.business }
            return newState
        case DELETE_BUSINESS:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state
    }
}
