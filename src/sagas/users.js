import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

/*
generator funcs always yield values
then they wait us to instuct them again

  CALL - call a promise, wait for its result

*/
function* getUsers() {
  try {
    const result = yield call(api.getUsers);

    // the code below will only run after the above line is resolved
    console.log('result >>> ', result);
    // dispatch success action with put effect
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }))
  } catch (error) {
    yield put(actions.usersError({
      error: 'An error occurred when trying to get the users'
    }));
  }
}

function* createUser({payload}){
  try {
    // console.log('saga createUser ', payload)
    // yield;
    yield call(api.createUser, {
      firstName: payload.firstName, 
      lastName: payload.lastName
    });
    yield put(actions.usersLoading())
    yield call(api.getUsers);
  } catch (error) {
    // console.log('error creating a new user ', error);
    yield put(actions.usersError({
      error: 'An error occurred when trying to create the user'
    }));
  }
}

// watcher saga
// watches when one particular redux action has been dispatched
// and then acts upon the action by calling a worker saga
function* watchGetUSersRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest(){
  yield takeLatest(actions.types.CREATE_USER_REQUEST, createUser)
}

function* deleteUser({userId}){
  try {
    yield call(api.deleteUser, userId)
    yield put(actions.usersLoading())
    yield call(api.getUsers);
  } catch (error) {
    yield put(actions.usersError({
      error: 'An error occurred when trying to delete the user'
    }));
  }
    
}

function* watchDeleteUserRequest(){
  while(true){
    const action = yield take(actions.types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
}

const usersSagas = [
  fork(watchGetUSersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default usersSagas;