import { takeLatest } from 'redux-saga/effects';
import { searchAndAddUser } from 'redux/sagas/users';

import { Types as UserTypes } from 'redux/ducks/users';

export default function* root() {
  yield [
    takeLatest(UserTypes.SEARCH, searchAndAddUser),
  ];
}
