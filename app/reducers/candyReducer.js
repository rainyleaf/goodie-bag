//import thunkMiddleware from 'redux-thunk'
import axios from 'axios';
//initial state
const initialState = {
    candies: []
}
//action
const GET_ALL_CANDIES = 'GET_ALL_CANDIES'
//action creator
const getAllCandies = (candies) => ({
    type: GET_ALL_CANDIES,
    candies
})
//thunk creator because get all is an aynchronous thing and thunks must be used
//when doing async stuff in the store
export const getCandiesThunk = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/candy');
        const candies = response.data;
        const action = getAllCandies(candies)
        dispatch(action)
    }
}

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES: {
        return {...state, candies: action.candies}
    }
    default:
      return state
  }
}

export default candyReducer
