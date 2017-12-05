import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import 'config/ReactotronConfig';
import { store, persistor } from 'redux/store';
import Map from 'MapComponent';


const app = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Map />
    </PersistGate>
  </Provider>
);

export default app;
