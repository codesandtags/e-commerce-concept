import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run();

export const persistor = persistStore(store);

export default { store, persistor };