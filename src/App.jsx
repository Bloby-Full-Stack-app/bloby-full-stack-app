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
import { AudioProvider } from './context/AudioContext';
import LiveStream from './Pages/LiveStream';
import Register from './Pages/Register';
import Events from './Pages/Events';
import Messages from './Pages/Messages';
import Event from './Pages/Event';
import Artist from './Pages/Artist';
import TrimTrack from './Pages/TrimTrack';
import Notification from './components/Notification';


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
          <Notification />
            <Header />
            <Sidebar />
            <AudioProvider>
            <Player />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/artists" element={<Artists />} />
              <Route path="/releases" element={<Releases />} />
              <Route path="/Release" element={<Release />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/playlist/:playlistId" element={<Playlist />} />
              <Route path="/event/:eventId" element={<Event />} />
              <Route path="/artist/:userId" element={<Artist />} />
              <Route path="/trackeditor" element={<TrackEditor />} />
              <Route path="/trimtrack" element={<TrimTrack />} />
              <Route path="/livestream" element={<LiveStream />} />
              <Route path="/messages" element={
              <RequireAuth loginPath={'/login'}>
                  <Messages />
                </RequireAuth>
              } />
              <Route path="/profile" element={
                <RequireAuth loginPath={'/login'}>
                  <Profile />
                </RequireAuth>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </AudioProvider>
          </Router>

        </>
      </AuthProvider>
    </Provider>
  );
}

export default App;
