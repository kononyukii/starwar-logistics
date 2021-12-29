import { useDispatch } from 'react-redux'

import { bindActionCreators } from 'redux'
import allActions from 'store/actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}
