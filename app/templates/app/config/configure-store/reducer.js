import { handleActions } from 'redux-actions';
import { RESTORE_STORE_FINISHED } from './actions';

export default handleActions({
  RESTORE_STORE_FINISHED: (state, action) => ({
    ...state,
    isRehydrated: true
  })
}, { isRehydrated : false})
