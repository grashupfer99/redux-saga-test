import usersSagas from './users';
import { all } from 'redux-saga/effects';

// allow all these forked processes to be created in parallel
export default function* rootSaga() {
  yield all([
    ...usersSagas
  ])
}