import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {test}) {
  const store = createStore(
    reducers,
    initialState,
    bindMiddleware([thunk])
  );
  let currentState = store.getState();
  store.subscribe(() => {
    // keep track of the previous and current state to compare changesAppLayout/index.j
    let previousState = currentState;
    currentState = store.getState();
  });
  return store;
}

export default configureStore;
