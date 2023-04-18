import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AuthProvider, useIsAuthenticated } from 'react-auth-kit';
import { useDispatch, useSelector } from 'react-redux';
import Home from "./Pages/Home";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom"
import Artists from './Pages/Artists';
import Profile from './Pages/Profile';
import Player from './components/Player';
import Releases from './Pages/Releases';
import store from './redux/store';
import Login from './Pages/Login';
import MainLayout from './layout';


const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  return auth ? <Component /> : <Navigate to='/login' />;
};

function App() {

  return (
    <Provider store={store}>
      <AuthProvider authType={'localstorage'} authName={'_auth'}>
        <>
          <Router basename='/'>

            <Header />
            <Sidebar />
            <Player />
            <Routes>
              <Route exact path={'/'}>
                <Route exact path={''} element={<MainLayout />} />
                <Route
                  exact
                  path={':screen/:id?'}
                  element={<MainLayout />}
                />
              </Route>
            </Routes>
          </Router>

        </>
      </AuthProvider>
    </Provider >
  );
}

export default App;
