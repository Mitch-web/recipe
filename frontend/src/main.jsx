import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {StrictMode} from "react";
import App from './components/App.jsx'
import Recipe from './components/Recipe.jsx';
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import CategoriesList from "./components/CategoriesList.jsx";
import ByCategory from "./components/ByCategory.jsx";
import PopularRecipes from "./components/PopularRecipes.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
          <Header />
          <Navbar/>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/recipes/:id" element={<Recipe />}/>
              <Route path="/recipes/categories" element={<CategoriesList />}/>
              <Route path="/recipes/categories/:category" element={<ByCategory />}/>
              <Route path="/recipes/popular" element={<PopularRecipes />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </StrictMode>
);
