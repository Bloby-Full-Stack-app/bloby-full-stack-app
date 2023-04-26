import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Pages/Profile';
import Releases from '../Pages/Releases';
import Artists from '../Pages/Artists';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Release from '../Pages/Release';

export default function MainLayout() {
    const { screen } = useParams();
  
    const Page = () => {
      switch (screen) {
        case 'login':
          return <Login />;
        case 'profile':
          return <Profile />;
        case 'artists':
          return <Artists />;
        case 'releases':
          return <Releases />;
        case 'release/:id':
          return <Release />;
        case '':
        case undefined:
          return <Home />;
        default:
          return null;
      }
    };
  
    const page = useMemo(() => {
      return <Page />;
    }, [screen]);
}
