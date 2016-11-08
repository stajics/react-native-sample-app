import { AsyncStorage } from 'react-native';
import { apiEndpoint } from '../../urls';

export const AUTH_API_CALL = 'Authenticated API Call';

async function authenticatedApiCall(method, path, body, contentType = 'application/json') {
  const token = await AsyncStorage.getItem('authToken') || null;
  if (!token) {
    throw new Error('No authentication token saved!');
  }
  const response = await fetch(apiEndpoint + path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
      Authorization: token,
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
  const authenticatedApiCallParams = action[AUTH_API_CALL];
  if (!authenticatedApiCallParams) { // Middleware will be applied only to AUTH_API_CALL actions
    return next(action);
  }
  const { path, types, method, body, contentType } = authenticatedApiCallParams;
  const [requestType, successType, errorType] = types;
  next({ type: requestType, action });
  return authenticatedApiCall(method, path, body, contentType)
    .then(
      response => next({ type: successType, payload: response }),
      error => next({ type: errorType, payload: error, error: true })
    );
};
