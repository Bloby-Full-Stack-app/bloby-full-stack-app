import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Pages/Profile';
import Releases from '../Pages/Releases';
import Artists from '../Pages/Artists';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

export default function MainLayout() {
  const { screen, id } = useParams();

  // Header for landing page will have different layout
  const isLandingPage = () => {
    switch (screen) {
      case undefined:
      case '':
      case '/':
        return true;

      default:
        return false;
    }
  };

  const isCleanLayout = useMemo(() => {
    // pages that will not include Header and Footer
    const cleanLayouts = ['login', 'signup']
    return cleanLayouts.includes(screen)
  }, [screen])

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
      case '/':
      case '':
      case undefined:
        return <Home />;
      // By default, screen will only show the app shell
      // that contains the header and footer.
      // This is so that the Home page will be unique and classified
      // under the `isLandingPage` condition that is used to render
      // specific header layout (with different navbar and additional contact information).
      // TODO: Optionally redirect unavailable screen paths to '/'
      default:
        return null;
    }
  };

  return isCleanLayout
    ? <Page />
    : (
      <>
        <Page />
      </>
    );
}
