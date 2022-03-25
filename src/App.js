import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import ImageHeader from './components/ImageHeader';
import Team from './components/Team';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageHeader />
      {/* <!-- Modal --> */}
      <Team />
      <Work />
      <SideBar />
      {/* <!-- Container --> */}
      <Pricing />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;
