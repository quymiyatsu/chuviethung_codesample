import {all} from 'redux-saga/effects';
import {
  watchLogin,
  watchLoginFacebook,
  watchLoginGoogle,
  watchLoginAccountKit,
  watchRegister,
  watchGetProfile,
  watchUpdateProfile,
  watchForgotPass
} from './authSaga';
export default function* root() {
  yield all([
    watchLogin(),
    watchLoginFacebook(),
    watchLoginGoogle(),
    watchLoginAccountKit(),
    watchRegister(),
    watchGetProfile(),
    watchUpdateProfile(),
    watchForgotPass()
  ]);
}
