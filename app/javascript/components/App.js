import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../store/store';
import Greeting from './greeting';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greeting/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;