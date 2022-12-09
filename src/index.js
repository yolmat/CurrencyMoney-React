import React from 'react';
import ReactDOM from 'react-dom/client';
import ConvertMoney from './container/home'
import GlobalStyles from './style/GlobalReset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ConvertMoney /> <GlobalStyles />
    </>
);