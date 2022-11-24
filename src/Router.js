import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Products from './pages/Products/Products';
import Shopping from './pages/Shopping/Shopping';
import ScentList from './pages/ScentList/ScentList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/scentList/:id" element={<ScentList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
