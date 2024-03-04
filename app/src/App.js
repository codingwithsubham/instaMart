import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';
import Alert from './components/layout/Alert';
import { loadUser } from './store/auth/authEffect';
import Navbar from './components/layout/nav/Navbar';
import { getLocation } from './utils/geoLocation';
// import { connectSocket } from './utils/connectSocket';

function App() {
  useEffect(() => {
    getLocation();
    store.dispatch(loadUser());
    // connectSocket();
  }, []);
  const [lang, setLang] = useState(localStorage.getItem('lang'));
  
  window.addEventListener('storage', () => {
    setLang(localStorage.getItem('lang'));
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <div className="App insta-an">
            <div
              className={`main-content${
                lang === 'bn' ? ' font-bn' : ' font-en'
              }`}
            >
              <ScrollToTop />
              <Alert />
              <Navbar />
              <AppRoutes />
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
