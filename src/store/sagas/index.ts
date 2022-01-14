import { takeEvery } from '@redux-saga/core/effects'

import { sagaGetOffices } from './offices'

export function* sagaWatcher(): Generator {
  yield takeEvery('GET_OFFICES', sagaGetOffices)
}
