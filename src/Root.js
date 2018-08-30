import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';
import App from './components/controls/App';
import {configureStore} from './redux/store';

const store = configureStore();

class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;