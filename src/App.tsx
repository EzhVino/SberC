import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import CurrencyDropdown from './components/CurrencyDropdown/CurrencyDropdown';

import 'styles/global.css';

const App = () => {
  return (
    <>
      <Header />
      <CurrencyDropdown />
    </>
  );
};

export default App;
