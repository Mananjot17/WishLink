import Header from './components/Header'
import Creator from './pages/Creator';
import Brand from './pages/Brand';
import AboutUs from './pages/AboutUs';
import { Route, Routes, useLocation } from 'react-router-dom';



function App() {

  const location = useLocation();

  return (
    <>
      <Header currentPage={location.pathname} />
      <Routes>
        <Route path="/" element={<Creator />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App




