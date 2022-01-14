import { ActionCallback } from './common'

export type GetOfficesActions = {
  type: 'GET_OFFICES'
  callback?: ActionCallback
}

export interface OfficesActions {
  get(callback?: ActionCallback): GetOfficesActions
}
