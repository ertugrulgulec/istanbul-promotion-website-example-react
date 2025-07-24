import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Places from './pages/Places';
import Ayasofya from './places/Ayasofya';
import Topkapi from './places/Topkapi';
import Sultanahmet from './places/Sultanahmet';
import Galata from './places/Galata';
import Dolmabahce from './places/Dolmabahce';
import Arkeoloji from './places/Arkeoloji';
import BogazTuru from './places/BogazTuru';
import Camlica from './places/Camlica';
import Emirgan from './places/Emirgan';
import EyupSultan from './places/EyupSultan';
import Istiklal from './places/Istiklal';
import Kapalicarsi from './places/Kapalicarsi';
import Kizkulesi from './places/Kizkulesi';
import Miniaturk from './places/Miniaturk';
import Ortakoy from './places/Ortakoy';
import PierreLoti from './places/PierreLoti';
import RumeliHisari from './places/RumeliHisari';
import Suleymaniye from './places/Suleymaniye';
import Taksim from './places/Taksim';
import Yerebatan from './places/Yerebatan';




import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/ayasofya" element={<Ayasofya />} />
          <Route path="/places/topkapi" element={<Topkapi />} />
          <Route path="/places/sultanahmet" element={<Sultanahmet />} />
          <Route path="/places/galata" element={<Galata />} />
          <Route path="/places/dolmabahce" element={<Dolmabahce />} />
          <Route path="/places/arkeoloji" element={<Arkeoloji />} />
          <Route path="/places/bogazturu" element={<BogazTuru />} />
          <Route path="/places/camlica" element={<Camlica />} />
          <Route path="/places/emirgan" element={<Emirgan />} />
          <Route path="/places/eyupsultan" element={<EyupSultan />} />
          <Route path="/places/istiklal" element={<Istiklal />} />
          <Route path="/places/kapalicarsi" element={<Kapalicarsi />} />
          <Route path="/places/kizkulesi" element={<Kizkulesi />} />
          <Route path="/places/miniaturk" element={<Miniaturk />} />
          <Route path="/places/ortakoy" element={<Ortakoy />} />
          <Route path="/places/pierreloti" element={<PierreLoti />} />
          <Route path="/places/rumelihisari" element={<RumeliHisari />} />
          <Route path="/places/suleymaniye" element={<Suleymaniye />} />
          <Route path="/places/taksim" element={<Taksim />} />
          <Route path="/places/yerebatan" element={<Yerebatan />} />
        </Routes>
        <Footer /> {/* Footer'ı yönlendirme olarak değil, doğrudan ekle */}
      </div>
    </Router>
  );
}


export default App;
