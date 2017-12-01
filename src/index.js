import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'redux/store';
import Map from 'MapComponent';

const app = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default app;
