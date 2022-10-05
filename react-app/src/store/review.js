//constants

const GET_REVIEWS = 'reviews/GET_REVIEWS'
const GET_ONE_REVIEWS = 'reviews/GET_ONE_REVIEWS'
const CREATE_REVIEW = 'review/CREATE_REVIEW'
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    reviews
})
const getReview = (review) => ({
    type: GET_ONE_REVIEWS,
    review
})
const createReview = (review, currentUser) => ({
    type: CREATE_REVIEW,
    review,
    currentUser
})
const updateReview = (review, currentUser) => ({
    type: UPDATE_REVIEW,
    review,
    currentUser
})
const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id
})
export const getAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews')

    if (response.ok) {
        const data = await response.json()
        dispatch(getReviews(data))
        return data
    }
    return response
}
export const getOneReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(getReview(data))
        return data
    }
    return response
}

export const createAReview = (id, review, currentUser) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}/review`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(createReview(data, currentUser))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) {
            return data.errors;
        }
        else {
            return ['An error occurred> Please try again.']
        }
    }
}
export const updateAReview = (review, id, currentUser) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(updateReview(data, currentUser))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) {
            return data.errors;
        }
        else {
            return ['An error occurred> Please try again.']
        }
    }
}
export const deleteAReview = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteReview(id))
    }


}

const initialState = {}

export default function reviewReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_REVIEWS:
            let allReviews = {}
            console.log(action.reviews, 'reducerrrr')
            action.reviews.reviews.forEach(review => {
                allReviews[review.id] = review
            })
            return { ...allReviews }
        case CREATE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = { ...action.review, user: { ...action.currentUser } }
            return newState
        case UPDATE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = { ...action.review, user: { ...action.currentUser } }
            return newState
        case DELETE_REVIEW:
            newState = { ...state }
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}
