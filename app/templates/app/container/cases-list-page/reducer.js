import { handleActions } from 'redux-actions';
import { REQUEST_CASES, REQUEST_CASES_SUCCESS, REQUEST_CASES_ERROR } from './actions';

const defaultState = {
  isFetching: false,
  entities: {
    case: []
  }
};

export default handleActions({
  REQUEST_CASES: (state, action) => ({
    ...state,
    isFetching: true
  }),
  REQUEST_CASES_SUCCESS: (state, action) => ({
    ...action.payload,
    isFetching: false
  }),
  REQUEST_CASES_ERROR: (state, action) => ({
    ...state,
    isFetching: false
  })
}, defaultState);
