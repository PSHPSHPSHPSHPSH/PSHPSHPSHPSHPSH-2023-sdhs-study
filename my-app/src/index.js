import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

<<<<<<< Updated upstream
import { store } from './reduce';

import Router from './pages/Router';
=======
import Router from './pages/main/Router';
>>>>>>> Stashed changes

import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
