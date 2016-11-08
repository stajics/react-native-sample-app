import { AsyncStorage } from 'react-native';
import { apiEndpoint } from '../../urls';

export const API_CALL = 'API Call';

async function apiCall(method, path, body, contentType = 'application/json') {
  const response = await fetch(apiEndpoint + path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
    },
    body,
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw data;
  }
  return data;
}

/* eslint no-unused-vars: "off" */
export default store => next => (action) => {
  const apiCallParams = action[API_CALL];
  if (!apiCallParams) { // Middleware will be applied only to AUTH_API_CALL actions
    return next(action);
  }
  const { path, types, method, body, contentType } = apiCallParams;
  const [requestType, successType, errorType] = types;
  next({ type: requestType, action });
  return apiCall(method, path, body, contentType)
    .then(
      response => next({ type: successType, payload: response }),
      error => next({ type: errorType, payload: error, error: true })
    );
};
