import { ActionCallback } from '../../types/actions/common'
import { GetOfficesActions, OfficesActions } from '../../types/actions/offices'

const officesActions: OfficesActions = {
  get(callback: ActionCallback): GetOfficesActions {
    return {
      type: 'GET_OFFICES',
      callback
    }
  }
}

export default officesActions
