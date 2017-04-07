import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/Observable/dom/ajax';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import rootEpic from './epics';

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    getJSON: ajax.getJSON,
    post: ajax.post,
  }
});
const middleware = [epicMiddleware];

// 开发环境添加 Logger
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger);
  // Epic 热替换
  if (module.hot) {
    module.hot.accept('./epics', () => {
      epicMiddleware.replaceEpic(rootEpic);
    });
  }
}


export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
