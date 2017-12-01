import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/users';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.payload.user}`);
  if (response.ok) {
    yield put({
      type: Types.ADD,
      payload: { user: response.data, coordinate: action.payload.coordinate },
    });
  }
}
