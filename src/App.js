import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';

// pages
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Contacts from './pages/Contacts';


function App() {
  return (
        <div className="App">
          <Router>
            <Header /> 
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      
  );
}

export default App;
