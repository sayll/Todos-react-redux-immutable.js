import 'rxjs/Rx';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './containers/App';

// 创建app
function Render(Component) {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
Render(App);

// views 热替换
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/App', () => {
    Render(App);
  });
}