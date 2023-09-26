import { useEffect, useState } from 'react';
import Products from './components/Products'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Mtx from './components/Mtx';
import Phones from './components/Phones';
import Laptops from './components/Laptops';
import Tv from './components/Tv';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basket from './components/Basket';


function App() {

  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [result,setResult] = useState(false)

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])


  return (
    <div className=" w-full h-auto bg-slate-100 ">
      <Router>
        <Header data={data} setData={setData} basket={basket} setBasket={setBasket} result={result} setResult={setResult} />
        <Routes>
          <Route path="/" element={<Home data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/products" element={<Products data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/phones" element={<Phones data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/laptops" element={<Laptops data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/tv" element={<Tv data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/mtx" element={<Mtx data={data} basket={basket} setBasket={setBasket} />} />
          <Route path="/basket" element={<Basket data={data} basket={basket} setBasket={setBasket}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;