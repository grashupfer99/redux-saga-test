import { takeEvery, call, fork, put } from 'redux-saga/effects';
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

  }
}

// watcher saga
// watches when one particular redux action has been dispatched
// and then acts upon the action by calling a worker saga
function* watchGetUSersRequest() {
  yield takeEvery(actions.types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
  fork(watchGetUSersRequest)
]

export default usersSagas;