import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/joy';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <CssBaseline />
    <ToastContainer />
    <App />
  </Provider>,
);
