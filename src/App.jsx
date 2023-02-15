import Header from './components/layouts/Header/Header';
import Sidebar from './components/layouts/sidebar/Sidebar';
import Home from "./Views/Home";



function App() {
  return (
    <div className= "App">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
