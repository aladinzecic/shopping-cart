import './App.css';
import { Route,Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main style={{minHeight:"75vh"}}>
      <Routes>
        <Route  path="/" element={<Homepage/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order />} />
]      </Routes>
      </main> 
      <Footer></Footer>
    </div>
  );
}

export default App;
