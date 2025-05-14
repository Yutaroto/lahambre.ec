import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/HomePage/Home';
import { HomeHeader } from './components/HomePage/HomeHeader';
import { AllItemPage } from './components/AllItemPage/AllItemPage';
import { BrandPage } from './components/BrandPage/BrandPage';
import { AboutPage } from './components/aboutPage/aboutPage';
import { ContuctsPage } from './components/ContuctsPage/ContuctsPage';
import { ItemDetailPage } from './components/itemdetail/ItemDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allitem" element={<AllItemPage />} />
          <Route path="/Brand" element={<BrandPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contucts" element={<ContuctsPage />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
