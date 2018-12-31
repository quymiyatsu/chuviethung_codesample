import * as types from './type';

export function action(type, payload) {
  return {
    type,
    payload
  };
}

export function login(params, onComplete) {
  return {
    type: types.CURRENT_USER_LOGIN,
    params,
    onComplete
  };
}

export function loginFacebook(params, onComplete) {
  return {
    type: types.CURRENT_USER_LOGIN_FACEBOOK,
    params,
    onComplete
  };
}

export function loginGoogle(params, onComplete) {
  return {
    type: types.CURRENT_USER_LOGIN_GOOGLE,
    params,
    onComplete
  };
}

export function loginAccountKit(params, onComplete) {
  return {
    type: types.CURRENT_USER_LOGIN_ACCOUNT_KIT,
    params,
    onComplete
  };
}

export function logout() {
  return {
    type: types.CURRENT_USER_LOGOUT
  };
}

export function register(params, onComplete) {
  return {
    type: types.CURRENT_USER_REGISTER,
    params,
    onComplete
  };
}

export function forgotPass(params, onComplete) {
  return {
    type: types.CURRENT_USER_FORGOT_PASS,
    params,
    onComplete
  };
}

export function getProfile(params, onComplete) {
  return {
    type: types.CURRENT_USER_GET_PROFILE,
    params,
    onComplete
  };
}

export function updateProfile(params, onComplete) {
  return {
    type: types.CURRENT_USER_UPDATE_PROFILE,
    params,
    onComplete
  };
}

export function getQuestionList(params, onComplete) {
  return {
    type: types.QUESTTION_GET,
    params,
    onComplete
  };
}

export function getListLike(params, onComplete) {
  return {
    type: types.CURRENT_USER_GET_LIST_LIKE,
    params,
    onComplete
  };
}

export function getListChat(id, params, onComplete) {
  return {
    type: types.CURRENT_USER_GET_LIST_CHAT,
    params,
    id,
    onComplete
  };
}

export function getListChatReset(params, onComplete) {
  return {
    type: types.CURRENT_USER_GET_LIST_CHAT_RESET,
    params,
    onComplete
  };
}
export function getListWaitUser(params, onComplete) {
  return {
    type: types.CURRENT_USER_GET_LIST_USER_WAIT,
    params,
    onComplete
  };
}
export function delListChat(id, onComplete) {
  return {
    type: types.CURRENT_USER_GET_LIST_CHAT_DEL,
    id,
    onComplete
  };
}

export function searchUser(params, onComplete) {
  return {
    type: types.SEARCH_USER_GET,
    params,
    onComplete
  };
}

export function removeUserFromExplore(id) {
  return {
    type: types.SEARCH_USER_REMOVE,
    id
  };
}

export function uploadImage(image, onComplete) {
  return {
    type: types.CURRENT_USER_UPLOAD_IMAGE,
    image,
    onComplete
  };
}

export function getDetailChat(data, params, onComplete) {
  return {
    type: types.CHAT_GET_DETAIL,
    params,
    id: data.id,
    dataChat: data.dataChat,
    isLoadMore: data.isLoadMore,
    onComplete
  };
}

export function sentMessage(message, params, onComplete) {
  return {
    type: types.CHAT_SENT_MESSAGE,
    message,
    onComplete,
    params
  };
}

export function socketCreatePost(data) {
  return {
    type: types.SOCKET_CHAT_CREATE_POST,
    data
  };
}
export function socketCreatePostMyId(data) {
  return {
    type: types.SOCKET_CHAT_CREATE_POST_MY_ID,
    data
  };
}
export function addItemListChat(data) {
  return {
    type: types.ADD_ITEM_LIST_CHAT,
    data
  };
}
export function socketChangeState(data) {
  return {
    type: types.SOCKET_CHAT_CHANGE_STATE,
    data
  };
}

export function socketChangeOnline(data) {
  return {
    type: types.SOCKET_CHAT_CHANGE_ONLINE,
    data
  };
}

export function addUserLike(data) {
  return {
    type: types.CURRENT_USER_ADD_LIST_LIKE,
    data
  };
}

export function setListLike(id, status) {
  return {
    type: types.CURRENT_USER_SET_LIST_LIKE,
    id,
    status
  };
}

export function setUserIsLike(id, status) {
  return {
    type: types.USER_SET_LIKE_STATUS,
    id,
    status
  };
}

export function setIdActiveChat(id) {
  return {
    type: types.SET_ID_ACTIVE_CHAT,
    id
  };
}

export function remove() {
  return {
    type: types.REMOVE_ITEM
  };
}

export function removeWithId(id) {
  return {
    type: types.REMOVE_ITEM_WITH_ID,
    id
  };
}

export function removeMessage(idChannel, id) {
  return {
    type: types.REMOVE_MESSAGE,
    id,
    idChannel
  };
}
