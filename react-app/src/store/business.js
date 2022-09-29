//constants
const GET_BUSINESSES = 'business/GET_BUSINESSES'

const getBusinesses = (businesses) => ({
    type: GET_BUSINESSES,
    businesses
});

export const getAllBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses')

    if (response.ok) {
        const data = await response.json()
        dispatch(getBusinesses(data))
        return data
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
        default:
            return state
    }
}
