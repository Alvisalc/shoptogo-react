import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import  Category  from './Pages/Category';
import { Product } from './Pages/Product';
import { SignUp } from './Pages/SignUp';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import  men_banner from './Components/Assets/banner_mens.png'
import  women_banner from './Components/Assets/banner_women.png'
import  kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Category banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Category banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Category banner={kids_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<SignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
