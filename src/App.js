import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Shop from './Pages/Shop';
function App() {
  return (
    <div className='px-5 lg:px-10'>
      <Routes>
        <Route path="/" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
