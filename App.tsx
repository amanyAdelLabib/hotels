import React, {useEffect, useState, useMemo} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import AppStack from './src/Navigations/AppStack';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
