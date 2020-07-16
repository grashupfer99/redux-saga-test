// get users request actions

export const types = {
  GET_USERS_REQUEST: 'users/get_users/request',
  GET_USERS_SUCCESS: 'users/get_users_success'
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