import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Header from './components/Header';
import Gift from './pages/Gift';
import Order from './pages/Order';
import Pay from './pages/Pay';
import Store from './pages/Store';
import Home from './pages/Home';
import Search  from './pages/Search';
import Footer from './components/Footer';

function App() {
  return (
    
    <BrowserRouter>
          <Header/>
      <Routes>

        <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
        <Route  path="/dashboard" element={<Home />} />
        <Route path='/giftcards' element={<Gift />} />
        <Route path='/ordering' element={<Order />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/store' element={<Store />} />
        <Route path='/search' element={<Search />} />


      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
