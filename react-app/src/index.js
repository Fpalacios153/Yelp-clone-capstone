import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import FavoritesProvider from './context/SetFavoritesContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FavoritesProvider>
        <ModalProvider>

          <App />
        </ModalProvider>
      </FavoritesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
