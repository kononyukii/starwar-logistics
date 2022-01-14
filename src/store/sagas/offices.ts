/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { call } from '@redux-saga/core/effects'

import { officesApi } from '../../api/offices'

export function* sagaGetOffices(): any {
  try {
    const response = yield call(officesApi.getOffices)

    console.log(response)
  } catch (e) {
    console.log(e)
  }
}
