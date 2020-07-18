import { types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
  error: '',
  isLoading: true
}

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USERS_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        items: action.payload.items
      }
    }
    case types.USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    default: {
      return state
    }
  }
}