import {put, takeLatest} from 'redux-saga/effects';
import {requestAPI} from '../services/request';
import * as type from '../actions/type';
import * as api from '../services/api';

function* register(action) {
  const response = yield requestAPI(api.Register, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_REGISTER_FINISH,
      response
    });
  }
}

function* login(action) {
  const response = yield requestAPI(api.Login, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_LOGIN_FINISH,
      response
    });
  }
}

function* loginFacebok(action) {
  const response = yield requestAPI(api.LoginFace, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_LOGIN_FINISH,
      response
    });
  }
}

function* loginGoogle(action) {
  const response = yield requestAPI(api.LoginGoogle, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_LOGIN_FINISH,
      response
    });
  }
}

function* loginAccountKit(action) {
  const response = yield requestAPI(api.LoginPhone, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_LOGIN_FINISH,
      response
    });
  }
}

function* getProfile(action) {
  const response = yield requestAPI(api.Profile, api.GET, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_GET_PROFILE_FINISH,
      response
    });
  }
}

function* updateProfile(action) {
  const response = yield requestAPI(api.UpdateProfile, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
  if (response.meta.status === 200) {
    yield put({
      type: type.CURRENT_USER_UPDATE_PROFILE_FINISH,
      response
    });
  }
}

function* forgotPass(action) {
  const response = yield requestAPI(api.ForgotPass, api.POST, action.params);
  if (action.onComplete) {
    action.onComplete(response);
  }
}

export function* watchRegister() {
  yield takeLatest(type.CURRENT_USER_REGISTER, register);
}

export function* watchLogin() {
  yield takeLatest(type.CURRENT_USER_LOGIN, login);
}

export function* watchLoginFacebook() {
  yield takeLatest(type.CURRENT_USER_LOGIN_FACEBOOK, loginFacebok);
}

export function* watchLoginGoogle() {
  yield takeLatest(type.CURRENT_USER_LOGIN_GOOGLE, loginGoogle);
}

export function* watchLoginAccountKit() {
  yield takeLatest(type.CURRENT_USER_LOGIN_ACCOUNT_KIT, loginAccountKit);
}

export function* watchGetProfile() {
  yield takeLatest(type.CURRENT_USER_GET_PROFILE, getProfile);
}

export function* watchUpdateProfile() {
  yield takeLatest(type.CURRENT_USER_UPDATE_PROFILE, updateProfile);
}

export function* watchForgotPass() {
  yield takeLatest(type.CURRENT_USER_FORGOT_PASS, forgotPass);
}
