import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AuthProvider, useIsAuthenticated, RequireAuth } from 'react-auth-kit';
import Home from "./Pages/Home";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Artists from './Pages/Artists';
import Profile from './Pages/Profile';
import Player from './components/Player';
import Releases from './Pages/Releases';
import store from './redux/store';
import Login from './Pages/Login';
import Release from './Pages/Release';
import Playlist from './Pages/Playlist';
import TrackEditor from './Pages/TrackEditor';


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
          <Router>
            <Header />
            <Sidebar />
            <Player />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/releases" element={<Releases />} />
              <Route path="/Release" element={<Release />} />
              <Route path="/playlist/:playlistId" element={<Playlist />} />
              <Route path="/trackeditor" element={<TrackEditor />} />
              <Route path="/profile" element={
                <RequireAuth loginPath={'/login'}>
                  <Profile />
                </RequireAuth>
              } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        
      </>
      </AuthProvider>
    </Provider>
  );
}

export default App;
