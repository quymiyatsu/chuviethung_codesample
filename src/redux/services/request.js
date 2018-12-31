import axios from 'axios';
import {Platform} from 'react-native';
import * as api from './api';
import {store} from '../store';
const MimeLookup = require('mime-lookup');
const mime = new MimeLookup(require('mime-db'));

const defaultNetworkError = {
  meta: {
    status: 0,
    msg:
      'An error occurred while processing your request. Please try again later.'
  },
  response: null
};

export default function request(options, type) {
  return axios(options);
}

function* requestAPI(path, method, params) {
  const baseURL = path.indexOf('http') === -1 ? api.API : '';
  let additionPath = path;
  const accessToken = store.getState().auth.userdata ?
    store.getState().auth.userdata.access_token :
    '';

  if (
    accessToken !== undefined &&
    accessToken !== null &&
    accessToken.length > 0
  ) {
    if (additionPath.indexOf('?') > -1) {
      additionPath = `${additionPath}&access_token=${accessToken}&device=${
        Platform.OS
      }`;
    } else {
      additionPath = `${additionPath}?access_token=${accessToken}&device=${
        Platform.OS
      }`;
    }
  } else if (additionPath.indexOf('?') > -1) {
    additionPath = `${additionPath}&device=${Platform.OS}`;
  } else {
    additionPath = `${additionPath}?device=${Platform.OS}`;
  }

  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  };

  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const response = yield axios.request({
      url: additionPath,
      method,
      baseURL,
      headers: header,
      params: method === api.GET ? params : null,
      data: method === api.POST ? params : null,
      timeout: 20000,
      responseType: 'json',
      responseEncoding: 'utf8',
      cancelToken: source.token
    });
    console.log(method, baseURL + '/' + additionPath, params);
    console.log(response.data);
    return response.status === 200 ? response.data : defaultNetworkError;
  } catch (e) {
    console.log(method, baseURL + '/' + additionPath, params, e.message);
    return defaultNetworkError;
  }
}

// upload image

export const API_UPLOAD_IMAGE = 'upload-file';

function* upload(image) {
  console.log(image);
  let additionPath = API_UPLOAD_IMAGE;

  const accessToken = store.getState().auth.userdata ?
    store.getState().auth.userdata.access_token :
    '';
  if (
    accessToken !== undefined &&
    accessToken !== null &&
    accessToken.length > 0
  ) {
    additionPath = `${additionPath}?access_token=${accessToken}`;
  }

  const header = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  };

  const data = new FormData();
  data.append('thumbnail', {
    uri: image.uri,
    type: mime.lookup(image.uri),
    name: image.name
  });
  data.append('pending_position', 0);

  try {
    const response = yield axios({
      url: api.API + '/' + additionPath,
      method: api.POST,
      headers: header,
      data
    });
    console.log(api.POST, api.API + '/' + additionPath, image);
    console.log(response.data);
    return response.status === 200 ? response.data : defaultNetworkError;
  } catch (e) {
    console.log(api.POST, api.API + '/' + additionPath, image, e.message, e);
    return defaultNetworkError;
  }
}

export {requestAPI, upload};
