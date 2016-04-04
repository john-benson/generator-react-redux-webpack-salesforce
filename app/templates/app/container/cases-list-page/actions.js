import { createAction } from 'redux-actions';
import { retrieve } from 'force-vrolayer';
import CasesSchema from './cases.schema';
import { Schema, arrayOf } from 'normalizr';

export const REQUEST_CASES = 'REQUEST_CASES';
export const requestCases = createAction(REQUEST_CASES);

export const REQUEST_CASES_SUCCESS = 'REQUEST_CASES_SUCCESS';
export const requestCasesSuccess = createAction(REQUEST_CASES_SUCCESS, cases => cases, () => {
  return {
    schema: CasesSchema
  }
});

export const REQUEST_CASES_ERROR = 'REQUEST_CASES_ERROR';
export const requestCasesError = createAction(REQUEST_CASES_ERROR);

export const fetchCases = (term) => {

  const criteria = {  }

  if(term) {
    criteria.where = { Subject: { like: `%${term}%`} }; 
  }

  return (dispatch) => {
    dispatch(requestCases());

    retrieve({sobjectType: 'Case', fields: ['Id', 'Subject'], criteria: criteria})
      .then((res) => { return dispatch(requestCasesSuccess(res)) })
      .catch((err) => { return dispatch(requestCasesError(err)) });
  };
}
