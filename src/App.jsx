// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ImageAnimation from './components/Home/ImageAnimation';
import LearnMore from './components/Home/LearnMore';
import Serving from './components/Home/Serving';
import Location from './components/Home/Location';
import Deserts from './components/Home/Deserts';
import History from './components/AboutPage/History'; 
import Cardapio from './components/Cardapio/Cardapio';
import Galeria from './components/Galery/Galeria';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/History" element={<History />} />
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/Galeria" element={<Galeria/>}></Route>
        <Route path="/" element={
          <>
            <Header />
            <ImageAnimation />
            <LearnMore />
            <Serving />
            <Deserts />
            <Location />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
