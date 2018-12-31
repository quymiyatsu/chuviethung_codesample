import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/rootSagas';
import promise from './sagas/promise';

import logger from 'redux-logger';
import reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
};
const middlewares = [sagaMiddleware, promise];
const persistedReducer = persistReducer(persistConfig, reducers);

if (__DEV__) {
  middlewares.push(logger);
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
sagaMiddleware.run(RootSaga);
export {store, persistor};
