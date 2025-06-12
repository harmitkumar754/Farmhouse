import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/Header';
import Headerwithoutsearch from './component/Headerwithoutsearch';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Viewfarm from './component/Viewfarm';
import './App.css';
import CareerSection from './component/CareerSection';
import ContactUs from './component/ContactUs';

// A wrapper component to handle the layout logic
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <Header /> : <Headerwithoutsearch />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/CareerSection" element={<CareerSection />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/view-farm" element={<Viewfarm />} />
        <Route path="*" element={<h1 className="text-center text-2xl text-red-600">404 - Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
