import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import ProductFeature from './features/Product';
import CartFeature from './features/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/ecommerce-store' element={<HomePage />} />
        <Route path='/ecommerce-store/products/*' element={<ProductFeature />} />
        <Route path='/ecommerce-store/carts' element={<CartFeature />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
