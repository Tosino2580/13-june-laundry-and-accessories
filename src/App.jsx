import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './component/pages/Home';
import NavBar from './component/NavBar';
import Collections from './component/pages/NavPages/Collections';
import Kids from './component/pages/NavPages/Kids';
import Section from './component/Section';
import Agbada from './component/pages/NavPages/Mens/Agbada';
import Jalabiya from './component/pages/NavPages/Mens/Jalabiya';
import JalabiyaDetails from './MenDetails/JalabiyaDetails';
import AgbadaDetails from './MenDetails/AgbadaDetails';
import Footer from './component/Footer';
import Kaftan from './component/pages/NavPages/Mens/Kaftan';
import KaftanDetails from './MenDetails/KaftanDetails';
import CartDrawer from './component/CartDrawer';

import { CartProvider } from './context/CartContext'; 
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';

function App() {

  

  return (
    <CartProvider>
      <div className='bg-black overflow-hidden'>
        <Router>
        <Toaster position="top-center" reverseOrder={false} />
          <NavBar/>
          <CartDrawer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/laundry' element={<Collections />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/products' element={<ProductList/>} />
            <Route path='/bags' element={<Agbada />} />
            <Route path='/kafans-shirts' element={<Kaftan />} />
            <Route path='/perfume&spray' element={<Jalabiya />} />
            <Route path='/jalabiya/:id' element={<JalabiyaDetails/>} />
            <Route path='/agbada/:id' element={<AgbadaDetails/>} />
            <Route path='/kafans-shirts/:id' element={<KaftanDetails/>} />
            <Route path='/products/:id' element={<ProductDetails/>} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
