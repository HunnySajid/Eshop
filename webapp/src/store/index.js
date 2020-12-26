import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
// applying it on the Store
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

// then run the saga
sagaMiddleware.run(rootSaga);

// Creating Redux store
export default store
