import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default { store, persistor };