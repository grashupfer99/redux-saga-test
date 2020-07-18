// get users request actions

export const types = {
  GET_USERS_REQUEST: 'users/get_users/request',
  GET_USERS_SUCCESS: 'users/get_users_success',
  CREATE_USER_REQUEST: 'users/create_user_request',
  DELETE_USER_REQUEST: 'users/delete_user_request',
  USERS_ERROR: 'users/users_error',
  USERS_LOADING: 'users/users_loading'
}

export const getUsersRequest = () => ({
  type: types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    items
  }
})

export const createUserRequest = ({firstName, lastName}) => {
  // console.log('createUserRequest >>> ', firstName, lastName);
  return {
    type: types.CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName
  }
  }
}

export const deleteUserRequest = (userId) => {
  console.log('delete User request action ', userId);

  return {
    type: types.DELETE_USER_REQUEST,
  payload: {
    userId
  }
  }
}
  
export const usersError = ({error}) => ({
  type: types.USERS_ERROR,
  payload: {
    error
  }
})

export const usersLoading = () => ({
  type: types.USERS_LOADING,
  payload: {
    isLoading: true
  }
})
